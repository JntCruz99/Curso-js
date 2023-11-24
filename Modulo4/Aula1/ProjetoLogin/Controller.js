import Usuario from './Usuario.js';
import UsuarioRepository from './UsuarioRepository.js';

function main(){
    const jonatas = new Usuario('jonatas cruz', 'jntcruz', '123');
    const usuarioRepository = new UsuarioRepository();
    usuarioRepository.save(jonatas);
    usuarioRepository.findAll();
    usuarioRepository.logar('jntcruz','123');
}

main();