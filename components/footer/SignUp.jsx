import FooterStyles from "./footer.module.css";

export default function SignUp() {
    return (
        <div className={FooterStyles.signUp}>
            <div className="flex">
                <form action="">
                    <input className={FooterStyles.input} type="email" placeholder="example@email.com" required name="email"></input>
                </form>
                <button className={FooterStyles.signUpButton}>Sign Up</button>
            </div>
            <p className={FooterStyles.policyAgreementText}>By signing up, I agree with the Data Protection Policy of Magma</p>
        </div>
    )
}

{/* <div className={`flex ${FooterStyles.signUp}`}></div> */}