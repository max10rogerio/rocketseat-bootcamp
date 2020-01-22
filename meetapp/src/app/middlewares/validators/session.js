import * as Yup from 'yup'

export const store = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
})

export default {
  store,
}
