import { useMemo, useState } from 'react'

const initialValues = {
  name: '',
  phone: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const isValid = useMemo(() => {
    return form.name.trim() && form.phone.trim() && form.message.trim()
  }, [form])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Атыңызды жазыңыз.'
    if (!form.phone.trim()) nextErrors.phone = 'Телефон номерин жазыңыз.'
    if (!form.message.trim()) nextErrors.message = 'Суроо же билдирүүнү жазыңыз.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setStatus('loading')

    window.setTimeout(() => {
      setStatus('success')
      setForm(initialValues)
      setErrors({})
    }, 800)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-group">
        <label htmlFor="name">Атыңыз</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="field-group">
        <label htmlFor="phone">Телефон</label>
        <input id="phone" name="phone" value={form.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} />
        {errors.phone && <span className="field-error">{errors.phone}</span>}
      </div>

      <div className="field-group">
        <label htmlFor="message">Суроо/билдирүү</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>

      <button type="submit" className="button button--primary" disabled={status === 'loading' || !isValid}>
        {status === 'loading' ? 'Жөнөтүлүүдө...' : 'Форманы жөнөтүү'}
      </button>

      {status === 'success' && (
        <p className="form-status form-status--success">Форма демо режиминде түзөтүлдү. Чыныгы жолугушуу үчүн WhatsApp же телефон аркылуу байланышыңыз.</p>
      )}

      {status === 'error' && (
        <p className="form-status form-status--error">Сураныч, бардык талааларды толтуруңуз.</p>
      )}
    </form>
  )
}

export default ContactForm
