import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable()
export class DynamicComponentService {
    constructor(private cfr: ComponentFactoryResolver) { }

    async initComponent<TComponent>(vcr: ViewContainerRef, component: Type<TComponent>) {
        vcr.clear();
        return vcr.createComponent(this.cfr.resolveComponentFactory(component));
    }

    clearComponent(vcr: ViewContainerRef) {
        vcr.clear();
    }
}
