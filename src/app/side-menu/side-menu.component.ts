import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  userName: string = "Danny Loja";
  theme: string = "";
  widthMenu: number = 25;
  visibleMenu: boolean = true;

  setVisibilityBack():void {
    this.visibleMenu = !this.visibleMenu;
    this.visibleMenu = false;
  }
  setVisibilityMenu():void {
    this.visibleMenu = !this.visibleMenu;
    this.visibleMenu = true;
  }

  themeColors = ['rgb(19, 90, 114)', '#ff6363', '#ffc857', '#6a00f4'];
  currentColorIndex = 0;
  setThemeColor(color: string):void{
    this.currentColorIndex = (this.currentColorIndex + 1) % this.themeColors.length;
    this.theme = this.themeColors[this.currentColorIndex];
  }

  setSizeMenu(){
    this.widthMenu+=10;
    if(this.widthMenu>100){
      this.widthMenu = 25;
    }
  }
}
