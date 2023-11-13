import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // selector:'[app-server]' as atribute
    // selector:'.app-server' as class
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId:number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        // string interpolation: only works in a normnal template, not within another expression
        return this.serverStatus;
    }
}