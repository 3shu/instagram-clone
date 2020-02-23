import React from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react'


export default ({styles, handleClick, handleSubmit}) => {
  const args={}

  const handleChange = (ev, input)=>{
    args[input.name] = input.value
  }

  return (
  <div>
    <div  style={styles.box}>
        <h2>Instagram-Clone</h2>
        <Form onSubmit={(ev)=>handleSubmit(ev, args)}>
          <Form.Field>
             <Form.Input name="email" onChange={handleChange} placeholder='email o nombre de usuario' icon={<Icon name="user" size="large" />} />
           </Form.Field>
           <Form.Field>
             <Form.Input name="password" onChange={handleChange} type="password" placeholder='Password' icon={<Icon name='eye slash' size="large" />} />
           </Form.Field>
           <Button type='submit' primary fluid>Iniciar sesión</Button>
          <Divider horizontal> O </Divider>
          <Button color="facebook">
            <Icon name="facebook" /> Iniciar sesión con facebook
          </Button>
        </Form>
    </div>
    <div  style={styles.box}>
        ¿No tienes una cuenta? <a href="/" onClick={handleClick}>Regístrate</a>
    </div>
  </div>)
}