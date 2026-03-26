import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class ProdutoController{
    @Get()
    @Render('produto/inicial')
    inicial(): object{
        return{
            titulo: 'Produtos - Consulta'
        }
    }
}