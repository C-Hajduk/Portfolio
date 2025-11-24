import { Component } from '@angular/core';
import { LegalNotice } from "./legal-notice/legal-notice";
import { Header } from "../shared/header/header";
import { Footer } from "../shared/footer/footer";

@Component({
  selector: 'app-imprint',
  imports: [LegalNotice, Header, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
