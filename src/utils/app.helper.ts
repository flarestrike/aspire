import { appMods } from 'src/model/app.mod';

export class AppHelper {
  static links(label, id) {
    return Object.values(appMods).map(i => {
       const { mod, path, icon } = i;
       const link = ['/', id];
       if (path) {
         link.push(path);
       }
       return { text: label[mod], link, icon };
    });
  }
}
