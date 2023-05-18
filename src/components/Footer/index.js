import Image from "next/image";
import Logo from "/public/logo.svg"
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={Logo} width={63} height={63} quality={100} priority={true} alt="" />
      <p>Email: <a href="mailto:support@shanghaitoken.io">support@shanghaitoken.io</a></p>
      <div className={styles.socials}>
          <a href="#">
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3199 2.71829C17.6731 3.01956 16.9808 3.22682 16.2511 3.32082C16.9956 2.84615 17.5649 2.09532 17.8363 1.20086C17.1379 1.63291 16.3653 1.94586 15.5439 2.12276C14.8889 1.37777 13.9525 0.908936 12.9134 0.908936C10.9215 0.908936 9.30711 2.62371 9.30711 4.73725C9.30711 5.04143 9.34173 5.33336 9.40163 5.61011C6.40525 5.46122 3.749 3.93153 1.97249 1.62065C1.66038 2.18348 1.48289 2.8374 1.48289 3.54911C1.48289 4.88088 2.12085 6.04858 3.08521 6.73519C2.49561 6.71709 1.94062 6.54368 1.45432 6.25818V6.3043C1.45432 8.16153 2.69617 9.70991 4.34465 10.0626C4.04408 10.1472 3.72317 10.1963 3.39733 10.1963C3.16599 10.1963 2.94509 10.1723 2.72475 10.1291C3.18852 11.6495 4.51609 12.7564 6.09863 12.7897C4.86832 13.8144 3.30886 14.4251 1.62851 14.4251C1.34222 14.4251 1.05649 14.4105 0.769653 14.3737C2.37252 15.4597 4.26442 16.0949 6.30799 16.0949C12.9387 16.0949 16.5621 10.2593 16.5621 5.2055C16.5621 5.04435 16.5621 4.88029 16.5505 4.71565C17.2577 4.18025 17.8699 3.50182 18.3534 2.73289L18.3199 2.71829Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2064 1.90071C13.1203 1.40383 11.9635 1.0377 10.7449 0.828491C10.5948 1.09001 10.4182 1.44741 10.3034 1.73508C9.01418 1.5433 7.7338 1.5433 6.47107 1.73508C6.34745 1.44741 6.17084 1.09001 6.02073 0.828491C4.80215 1.0377 3.64539 1.40383 2.55926 1.90071C0.369361 5.16096 -0.222267 8.34275 0.0691318 11.4722C1.52612 12.5445 2.93013 13.1895 4.31649 13.6167C4.66087 13.1547 4.96109 12.6578 5.226 12.1435C4.72268 11.9604 4.24584 11.725 3.7955 11.4548C3.91912 11.3676 4.03392 11.2717 4.14871 11.1846C6.91258 12.4573 9.90604 12.4573 12.6346 11.1846C12.7494 11.2805 12.8642 11.3676 12.9878 11.4548C12.5375 11.725 12.0518 11.9517 11.5573 12.1435C11.8222 12.6578 12.1224 13.1547 12.4668 13.6167C13.8532 13.1895 15.266 12.5445 16.7142 11.4722C17.0585 7.83715 16.1225 4.69023 14.224 1.90071H14.2064ZM5.59687 9.55444C4.76683 9.55444 4.0869 8.79604 4.0869 7.8633C4.0869 6.93056 4.74917 6.17216 5.59687 6.17216C6.44458 6.17216 7.11568 6.93056 7.10685 7.8633C7.10685 8.78733 6.44458 9.55444 5.59687 9.55444ZM11.1688 9.55444C10.3387 9.55444 9.65879 8.79604 9.65879 7.8633C9.65879 6.93056 10.3211 6.17216 11.1688 6.17216C12.0165 6.17216 12.6876 6.93056 12.6787 7.8633C12.6787 8.78733 12.0165 9.55444 11.1688 9.55444Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.92978 1.66833C5.51786 1.66833 1.93716 5.24903 1.93716 9.66095C1.93716 14.0729 5.51786 17.6536 9.92978 17.6536C14.3417 17.6536 17.9224 14.0729 17.9224 9.66095C17.9224 5.24903 14.3417 1.66833 9.92978 1.66833ZM13.6384 7.10331C13.5185 8.36615 12.9989 11.4353 12.7352 12.85C12.6233 13.4494 12.3995 13.6493 12.1917 13.6732C11.7281 13.7132 11.3764 13.3695 10.9289 13.0738C10.2255 12.6102 9.82588 12.3225 9.1465 11.8749C8.35523 11.3554 8.86676 11.0676 9.32234 10.6041C9.44223 10.4842 11.4883 8.62191 11.5283 8.45406C11.5339 8.42864 11.5331 8.40225 11.5261 8.37718C11.5192 8.35211 11.5062 8.32911 11.4883 8.3102C11.4404 8.27024 11.3764 8.28622 11.3205 8.29421C11.2486 8.3102 10.1296 9.05351 7.94761 10.5242C7.62791 10.74 7.34017 10.8518 7.08441 10.8439C6.79667 10.8359 6.25318 10.684 5.84555 10.5481C5.34202 10.3883 4.95038 10.3004 4.98235 10.0206C4.99834 9.87675 5.19815 9.73288 5.5738 9.58102C7.90765 8.56596 9.45821 7.89458 10.2335 7.57488C12.4554 6.64773 12.911 6.48788 13.2147 6.48788C13.2787 6.48788 13.4305 6.50387 13.5265 6.58379C13.6064 6.64773 13.6304 6.73565 13.6384 6.79959C13.6304 6.84755 13.6463 6.99142 13.6384 7.10331Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
    </footer>
  );
}
