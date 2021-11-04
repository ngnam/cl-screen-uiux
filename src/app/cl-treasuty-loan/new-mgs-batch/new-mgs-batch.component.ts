import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-new-mgs-batch',
  templateUrl: './new-mgs-batch.component.html',
  styleUrls: ['./new-mgs-batch.component.scss']
})
export class NewMgsBatchComponent implements OnInit {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    }
  ];

  onSubmit(model) {
    console.log(model);
  }

  onModelChange(e) {
    console.log(`onModelChange`, e);
  }
  constructor() { }

  ngOnInit() {
  }

}
