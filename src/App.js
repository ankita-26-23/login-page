import './App.css';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Footer from "./components/footer";
import Header from "./components/header";
import Button from "./components/button";

function App() {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [password, setPassword] = useState("");
  const [text, setText] = useState("password");
  const [icon, setIcon] = useState(GoEyeClosed);
  const [validDomain, setValidDomain] = useState(true);

  useEffect(() => {
    var userLang = navigator.language || navigator.userLanguage;
    console.log("The language is: " + userLang);
    if (userLang.includes("te")) {
      setSelectedLanguage("Telugu");
    } else if (userLang.includes("hi")) {
      setSelectedLanguage("Hindi");
    } else {
      setSelectedLanguage("Hindi");
    }
  }, [])

  const publicProviderDomains = [
    'gmail.com',
    'outlook.com',
    'yahoo.com',
    'aol.com',
  ];

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
    setIsTyping(true);
    setValidDomain(true);
  }

  const onChangeValue = (e) => {
    setPassword(e.target.value);
    setIsTyping(true);
  }

  function validateEmail(email) {
    const atIndex = email.indexOf("@");
    if (atIndex == -1) {
      setValidDomain(false);
    } else {
      const sub = email.substr(atIndex + 1);

      if (publicProviderDomains.includes(sub.toLowerCase())) {
        console.log("domain is not acccepatble", sub);
        setValidDomain(false);
      }
    }
    // const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    // console.log(regex.test(email), sub, sub.toLowerCase())
    // let x = regex.test(email);
    // setValidEmail(x)
    // return regex.test(email);
  }

  const handleToggle = () => {
    if (text === "password") {
      setIcon(GoEyeClosed);
      setText("text")
    } else {
      setIcon(GoEye);
      setText("password")
    }
  }

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const submit = () => {
    let obj = {
      email: { email },
      password: { password },
      language: { selectedLanguage }
    }
    console.log("on submit ....", obj);
  }

  return (
    <div className="container">
      <Header />
      <Card className="p-4" >
        <Form onSubmit={() => submit()}>
          <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="label-with-margin-email">Email:</Form.Label>
            <Form.Control type="email" placeholder="email@address.com" className={`${!isTyping ? "email-with-background-image" : ""}`}
              value={email} onBlur={(e) => validateEmail(e.target.value)} onChange={(e) => onChangeHandler(e)} />
          </Form.Group>
          {!validDomain && <p className="error">Please Enter Valid Email</p>}

          <Form.Group className="mb-3 d-flex justify-content-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="label-with-margin">Password:</Form.Label>
            <Form.Control type={text} placeholder="........" className={`${!isTyping ? "password-with-background-image" : ""}`}
              value={password} onChange={(e) => onChangeValue(e)} />
            <div className={`${password.length !== 0 ? "icon" : "hidden"}`} onClick={handleToggle}>{icon}</div>
          </Form.Group>
          <a href="">Forgot Password?</a>
          <div className="mb-3 d-flex ">
            <label className="label-with-margin">Language:</label>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="telgu">Telgu</option>
            </select>
          </div >
          <div className="form-check form-switch switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">Remember me</label>
          </div>
        </Form>
      </Card>
      <Button submit={submit} />
      <Footer />
    </div>
  );
}

export default App;
