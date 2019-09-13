import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SpeedDialFabPosition } from './speed-dial-fab/speed-dial-fab.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  private speedDialFabButtons = [
    {
      icon: 'timeline',
      tooltip: 'Do some timeline here'
    },
    {
      icon: 'view_headline',
      tooltip: 'Do some headline here'
    },
    {
      icon: 'room',
      tooltip: 'get some room here'
    },
    {
      icon: 'lightbulb_outline',
      tooltip: 'Do some outline here'
    },
    {
      icon: 'lock',
      tooltip: 'Do lock down'
    }
  ];

  SpeedDialFabPosition = SpeedDialFabPosition;
  speedDialFabColumnDirection = 'column';
  speedDialFabPosition = SpeedDialFabPosition.Top;
  speedDialFabPositionClassName = 'speed-dial-container-top';

  onPositionChange(position: SpeedDialFabPosition) {
    switch(position) {
      case SpeedDialFabPosition.Bottom:
        this.speedDialFabPositionClassName = 'speed-dial-container-bottom';
        this.speedDialFabColumnDirection = 'column-reverse';
        break;
      default:
        this.speedDialFabPositionClassName = 'speed-dial-container-top';
        this.speedDialFabColumnDirection = 'column';
    }
  }

  onSpeedDialFabClicked(btn: {icon: string}) {
    console.log(btn);
  }
}
