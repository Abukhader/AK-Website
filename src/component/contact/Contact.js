import React from 'react';
import './contact.css'; // استيراد ملف CSS لتخصيص صفحة الاتصال
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // استيراد عناصر Bootstrap
import { Link as ScrollLink } from 'react-scroll';
import './contact.css'
const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className='call-h2'>اتصل بنا</h2>
            <p className='call-p'>إذا كان لديك أي أسئلة أو استفسارات، فلا تتردد في التواصل معنا.</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label className='call-p'>الاسم:</Form.Label>
                <Form.Control  type="text" placeholder="ادخل اسمك" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className='call-p'>البريد الإلكتروني:</Form.Label>
                <Form.Control type="email" placeholder="ادخل بريدك الإلكتروني" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label className='call-p'>الرسالة:</Form.Label>
                <Form.Control className='call-p' as="textarea" rows={4} placeholder="ادخل رسالتك" />
              </Form.Group>
              <Button className='call-p' variant="primary" type="submit">
                إرسال 
              </Button>
            </Form>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
