import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./CTLOGIN.module.css";

const CTLOGIN: FunctionComponent = () => {
  const onSendOTPClick = useCallback(() => {
  }, []);

  const onSendOTP1Click = useCallback(() => {

  }, []);

  return (
    <div className={styles.ctLogin}>
      <Button
        className={styles.sendOtp}
        variant="light"
        onClick={onSendOTPClick}
      >
        NEW USER? SIGN UP
      </Button>
      <Button
        className={styles.sendOtp1}
        variant="light"
        onClick={onSendOTP1Click}
      />
      <div className={styles.policy}>
        <div className={styles.byContinuingYou}>
          By continuing, you agree to our
        </div>
        <div className={styles.termsOfService}>{`Terms of Service `}</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.contentPolicy}>Content Policy</div>
        <div className={styles.policyChild} />
        <div className={styles.policyItem} />
        <div className={styles.policyInner} />
      </div>
      <div className={styles.or}>
        <img className={styles.orChild} alt="" src="../line-2.svg" />
        <div className={styles.or1}>OR</div>
        <img className={styles.orItem} alt="" src="../line-2.svg" />
      </div>
      <Form.Group className={styles.enterPasswordFormgroup}>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className={styles.enterUsernameFormgroup}>
        <Form.Control type="text" />
      </Form.Group>
      <div className={styles.username}>USERNAME :</div>
      <div className={styles.password}>PASSWORD :</div>
      <div className={styles.login}>LOGIN</div>
      <img className={styles.ctLoginChild} alt="" src="../ellipse-68.svg" />
      <img className={styles.logoct1Icon} alt="" src="../logoct-1@2x.png" />
    </div>
  );
};

export default CTLOGIN;
