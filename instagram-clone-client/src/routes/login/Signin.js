import React from 'react';
import { Divider, Form, Button, Icon, Message } from 'semantic-ui-react';


export default ({styles, handleClick, handleSubmit, handleChange, args, errors}) => {

  return (
  <div>
    <div  style={styles.box}>
        <img src='images/png-instagram-logo-2.png' alt="logo" style={{width: "100%"}}/>
        <Form onSubmit={(ev)=>handleSubmit(ev, args)}>
          <Form.Field>
             <Form.Input name="email" onChange={handleChange} placeholder='email o nombre de usuario' icon={<Icon name="check circle outline" size="large" />} />
           </Form.Field>
           <Form.Field>
             <Form.Input name="password" onChange={handleChange} type="password" placeholder='Password' icon={<Icon name="remove circle" color="red" size="large" />} />
           </Form.Field>
           <Button type='submit' primary fluid>Iniciar sesión</Button>
          <Divider horizontal> O </Divider>
          <Button color="facebook">
            <Icon name="facebook" /> Iniciar sesión con facebook
          </Button>
          {
            errors.length?<Message negative header="Los siguientes errores:"
              list={errors.map(error=>`[${error.path}] ${error.message}`)} />:null
          }
        </Form>
    </div>
    <div  style={styles.box}>
        ¿No tienes una cuenta? <a href="/" onClick={handleClick}>Regístrate</a>
    </div>
  </div>)
}