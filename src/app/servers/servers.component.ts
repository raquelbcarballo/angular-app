import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverCreationStatus = 'No server was created'
    serverName: string = 'TestServer';
    serverCreated= false;
    servers=['testServer','testServer2']

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreated=true;
        this.servers.push(this.serverName)
        this.serverCreationStatus = 'Server was created! Name is:' + this.serverName;
    }

    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value
    }

}