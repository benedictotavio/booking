import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">De ferias para o seu dinheiro.</h1>
      <span className="mailDesc">Cadastre-se e enviaremos as melhores ofertas para você.</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Inscreva-se</button>
      </div>
    </div>
  )
}

export default MailList