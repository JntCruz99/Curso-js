class UsuarioRepository {
    listUsuarios = [];

    save(p1) {
        this.listUsuarios.push(p1);
        return console.log('usuario cadastrado com sucesso');
    }

    findAll() {
        this.listUsuarios.forEach(function (usuario) {
            console.log(usuario);
        });
    }

    findUsername(username) {
        for (let u of this.listUsuarios) {
            if (u.username === username) {
                return u;
                break;
            }
        }
        return null;
    }

    logar(username, senha) {
        for (let u of this.listUsuarios) {
            if (u.username === username && u.senha === senha) {
                return console.log(`usuario ${u.nome} logado com sucesso`);
                break;
            }
        }
        return console.log(`senha ou login incorretos`);
    }
}
const usuarioRepository = new UsuarioRepository();
export default UsuarioRepository;