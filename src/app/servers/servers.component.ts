import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverCreationStatus = 'No server was created'
    serverName: string = 'TestServer';
    username: string = '';
    serverCreated= false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreated=true;
        this.serverCreationStatus = 'Server was created! Name is:' + this.serverName;
    }

    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value
    }

    onUsername() {
        this.username = ''
    }
}