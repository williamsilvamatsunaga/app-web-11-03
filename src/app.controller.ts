import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { render } from 'ejs';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getInicial(): object {
    let pessoas = [
      { nome: 'William da Silva Matsunaga', email: 'williamsilvamatsunaga@outlook.com' },
      { nome: 'Fernando Sampaio Correia', email: 'sampaiocorrea123@gmail.com' },
      { nome: 'Kakau Mirandex', email: 'kakaumirandex@gmail.com' },
      { nome: 'Lionel Andreas Messi', email: 'messijogafacil@outlook.com' },
      { nome: 'Silvestre Stalone', email: 'stalonerambobomdemais@gmail.com' },
      { nome: 'Ronaldinho Gaúcho', email: 'ronaldinhovoutedibrei@gmail.com' },
    ];

    return { 
      titulo: 'Lista de Pessoas', 
      horaAgora: new Date().toLocaleString('pt-BR'),
      listaPessoas: pessoas
    };
  }

  @Get('/hello')
  @Render('inicial')
  getHello(): object {
    return {
      titulo: 'Seção de informações do sistema web.',
      listaPessoas: [] // 👈 evita erro
    }
  }

  @Get('/sobre')
  @Render('_sobre')
  getSobre(): object {
    return {
      titulo: 'Seção de informações do sistema web.'
    }
  }

  @Get('/login')
  @Render('autenticacao/login')
  getLogin(): object {
    return {
      layout: false
    }
  }
}
