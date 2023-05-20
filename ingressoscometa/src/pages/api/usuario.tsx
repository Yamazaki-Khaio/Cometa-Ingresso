import { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco_de_dados',
});

interface UsuarioAttributes {
  nome: string;
  cpf: string;
  data_nascimento: Date; // Alterado para tipo Date
  senha: string;
  tipoUsuario: string;
}

class UsuarioModel extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public nome!: string;
  public cpf!: string;
  public data_nascimento!: Date; // Alterado para tipo Date
  public senha!: string;
  public tipoUsuario!: string;
}

UsuarioModel.init(
  {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    senha: DataTypes.STRING,
    tipoUsuario: DataTypes.STRING,
  },
  { sequelize, modelName: 'usuario' }
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { nome, cpf, data_nascimento, senha, tipoUsuario } = req.body as UsuarioAttributes;

      await sequelize.sync(); // Sincroniza o modelo com o banco de dados antes de criar um usuário

      await UsuarioModel.create({
        nome,
        cpf,
        data_nascimento,
        senha,
        tipoUsuario,
      });

      res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
      console.error('Erro ao salvar os dados do usuário:', error);
      res.status(500).json({ message: 'Erro ao salvar os dados do usuário' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
