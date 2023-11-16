import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // selector:'[app-server]' as atribute
    // selector:'.app-server' as class
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        // string interpolation: only works in a normnal template, not within another expression
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}