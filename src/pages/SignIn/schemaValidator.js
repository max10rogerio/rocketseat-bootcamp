import * as Yup from 'yup'

export default Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('A senha é obrigatória'),
})
