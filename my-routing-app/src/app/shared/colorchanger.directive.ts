import {Directive, Renderer, ElementRef, HostListener, HostBinding} from '@angular/core'

@Directive({
    selector:'[cc]'
})
export class ColorChanger{
    //constructor(ef:ElementRef,ren:Renderer){
    //    ren.setElementStyle(ef.nativeElement, 'background-image','linear-gradient(to bottom right, violet, indigo, blue, green, yellow,orange,red')
    //}
    private defaultColor = 'white'
    @HostListener('mouseenter')
    addcolor(){
        this.defaultColor = 'pink'
    }
    @HostListener('mouseleave')
    removecolor(){
        this.defaultColor = 'white'
    }
    @HostBinding('style.background-color')
    get applyStyle(){
        return this.defaultColor;
    }
}