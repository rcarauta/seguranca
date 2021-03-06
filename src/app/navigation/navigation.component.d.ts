import { OnInit } from '@angular/core';
import { AuthenticationService } from "../_services/authentication.service";
export declare class NavigationComponent implements OnInit {
    private authenticationService;
    private name_user;
    constructor(authenticationService: AuthenticationService);
    ngOnInit(): void;
    logout(): void;
    verificarUsuarioLogado(): boolean;
}
