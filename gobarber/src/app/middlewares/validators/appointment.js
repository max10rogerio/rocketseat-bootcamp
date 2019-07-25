import * as Yup from 'yup'

export const store = Yup.object().shape({
  provider_id: Yup.number().required(),
  date: Yup.date().required(),
})

export default {
  store,
}
