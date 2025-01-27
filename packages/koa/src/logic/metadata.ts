import { DIService } from "@discordx/di";
import type { Decorator } from "@discordx/internal";
import { Modifier } from "@discordx/internal";

import type { DReqeuest } from "../decorators/classes/DRequest.js";
import type { DRouter } from "../decorators/classes/DRouter.js";
import type { Koa } from "../Koa.js";

export class MetadataStorage {
  // internal

  private static _isBuilt = false;
  private static _instance: MetadataStorage;
  private _modifiers: Array<Modifier<Decorator>> = [];

  // storage

  private _routers: DRouter[] = [];
  private _routes: DReqeuest[] = [];

  // internal getters

  static get instance(): MetadataStorage {
    if (!this._instance) {
      this._instance = new MetadataStorage();
    }
    return this._instance;
  }
  static set instance(value: MetadataStorage) {
    this._instance = value;
  }

  static get isBuilt(): boolean {
    return this._isBuilt;
  }

  // storage getter

  get routers(): readonly DRouter[] {
    return this._routers;
  }

  get routes(): readonly DReqeuest[] {
    return this._routes;
  }

  // methods

  addRouter(router: DRouter): void {
    this._routers.push(router);
    DIService.instance.addService(router.classRef);
  }

  addRequest(route: DReqeuest): void {
    this._routes.push(route);
  }

  addModifier<T extends Decorator = Decorator>(modifier: Modifier<T>): void {
    this._modifiers.push(modifier as Modifier<Decorator>);
  }

  async build(koa: Koa): Promise<void> {
    // build the instance if not already built
    if (MetadataStorage.isBuilt) {
      return;
    }
    MetadataStorage._isBuilt = true;

    await Modifier.applyFromModifierListToList(this._modifiers, this._routers);
    await Modifier.applyFromModifierListToList(this._modifiers, this._routes);

    this.routers.forEach((r) => {
      this.routes.forEach((route) => {
        if (route.from === r.from) {
          route.router = r;

          // register if filter is valid
          const api = route.api ?? r.api;
          if (!api || koa.api === api) {
            this.registerRoute(koa, r, route);
          }
        }
      });

      koa.use(r.router.routes());
    });
  }

  private registerRoute(koa: Koa, router: DRouter, route: DReqeuest) {
    switch (route.type) {
      case "ALL":
        router.router.all(route.path, ...route.middlewares, route.handler(koa));
        break;

      case "DELETE":
        router.router.delete(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      case "GET":
        router.router.get(route.path, ...route.middlewares, route.handler(koa));
        break;

      case "HEAD":
        router.router.head(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      case "LINK":
        router.router.link(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      case "OPTIONS":
        router.router.options(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      case "PATCH":
        router.router.patch(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      case "POST":
        router.router.post(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      case "UNLINK":
        router.router.unlink(
          route.path,
          ...route.middlewares,
          route.handler(koa)
        );
        break;

      default: {
        throw Error("Attempted to register an invalid method");
      }
    }
  }
}
