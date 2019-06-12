import { appMods } from 'src/model/app.mod';

export class AppHelper {
  static links(label, id) {
    return appMods.map(i => {
       const { textId, base, icon } = i;
       const link = ['/', id];
       if (base) {
         link.push(base);
       }
       return { text: label[textId], link, icon };
    });
  }
}
