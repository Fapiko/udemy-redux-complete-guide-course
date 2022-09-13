import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
          const {
                    value:              enteredName,
                    valueIsValid:       enteredNameIsValid,
                    hasError:           nameInputIsInvalid,
                    valueChangeHandler: nameInputChangeHandler,
                    inputBlurHandler:   nameInputBlurHandler,
                    reset:              resetNameInput,
                } = useInput((value) => value.trim() !== '');

          const {
                    value:              enteredEmail,
                    valueIsValid:       enteredEmailIsValid,
                    hasError:           emailInputIsInvalid,
                    valueChangeHandler: emailInputChangeHandler,
                    inputBlurHandler:   emailInputBlurHandler,
                    reset:              resetEmailInput,
                } = useInput((value) => value.includes('@'));
// const nameInputRef                                = useRef();
//           const [enteredName, setEnteredName]                 = useState('');
//           const [enteredNameTouched, setEnteredNameTouched]   = useState(false);
//           const [enteredEmail, setEnteredEmail]               = useState('');
//           const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

          // const enteredNameIsValid = enteredName.trim() !== '';
          // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

          // const enteredEmailIsValid = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail));
          // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

          let formIsValid = false;

          if (enteredNameIsValid && enteredEmailIsValid) {
              formIsValid = true;
          }

          // const nameInputChangeHandler = (event) => {
          //     setEnteredName(event.target.value);
          // }
          //
          // const nameInputBlurHandler = (event) => {
          //     setEnteredNameTouched(true);
          // }

          // const emailInputChangeHandler = (event) => {
          //     setEnteredEmail(event.target.value);
          // }
          //
          // const emailInputBlurHandler = (event) => {
          //     setEnteredEmailTouched(true);
          // }

          const formSubmissionHandler = (event) => {
              event.preventDefault();

              // setEnteredNameTouched(true)

              if (!enteredNameIsValid || !enteredEmailIsValid) {
                  return;
              }

              console.log(enteredName, enteredEmail);
              // setEnteredName('');
              // setEnteredNameTouched(false);
              resetNameInput();
              resetEmailInput();

              // setEnteredEmail('');
              // setEnteredEmailTouched(false);

              // const enteredValue = nameInputRef.current.value;
              // console.log(enteredValue);
          }

          const nameInputClasses  = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
          const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';

          return (
              <form onSubmit={formSubmissionHandler}>
                  <div className={nameInputClasses}>
                      <label htmlFor="name">Your Name</label>
                      <input
                          // ref={nameInputRef}
                          type="text"
                          id="name"
                          onChange={nameInputChangeHandler}
                          onBlur={nameInputBlurHandler}
                          value={enteredName}/>
                  </div>
                  {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
                  <div className={emailInputClasses}>
                      <label htmlFor="email">Email Address</label>
                      <input
                          type="email"
                          id="email"
                          onChange={emailInputChangeHandler}
                          onBlur={emailInputBlurHandler}
                          value={enteredEmail}/>
                  </div>
                  {emailInputIsInvalid && <p className="error-text">Email address must be valid.</p>}
                  <div className="form-actions">
                      <button disabled={!formIsValid}>Submit</button>
                  </div>
              </form>
          );
      }
;

export default SimpleInput;
