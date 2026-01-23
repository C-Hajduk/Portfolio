import { Component } from '@angular/core';
import { LegalNotice } from "./legal-notice/legal-notice";
import { Header } from "../shared/header/header";
import { Footer } from "../shared/footer/footer";
import { PrivacyPolicy } from "./privacy-policy/privacy-policy";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-imprint',
  imports: [LegalNotice, Header, Footer, PrivacyPolicy, RouterOutlet],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
