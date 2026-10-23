import { inject, Service } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Service()
export class Usuarios {
  private readonly afs = inject(AngularFireFunctions)

  private readonly oncallGerenciarUsuarios = this.afs.httpsCallable<any, any>('oncall_gerenciar_usuarios');

  private readonly oncallImportarUsuarios = this.afs.httpsCallable<any, any>('oncall_importar_usuarios');

  private readonly oncallBuscarUsuarios = this.afs.httpsCallable<any, any>('oncall_importar_usuarios');
}
