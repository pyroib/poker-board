export default function TrophyIcon(props) {
  return (
    <svg
      className="mr-2"
      width="2vw"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 22V34"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 34C18.6527 34 15.7394 36.0241 14.2353 39.0099C13.5169 40.436 14.5478 42 15.9175 42H28.0825C29.4522 42 30.4831 40.436 29.7647 39.0099C28.2606 36.0241 25.3473 34 22 34Z"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 8H5.96942C3.99637 8 3.00985 8 2.40034 8.74106C1.79082 9.48212 1.96956 10.3119 2.32705 11.9716C3.00988 15.1417 4.49096 17.9268 6.4978 20"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 8H38.0306C40.0036 8 40.9901 8 41.5997 8.74106C42.2092 9.48212 42.0304 10.3119 41.673 11.9716C40.9901 15.1417 39.509 17.9268 37.5022 20"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 22C29.732 22 36 15.7662 36 8.07642C36 7.87478 35.9957 7.67414 35.9872 7.47458C35.9017 5.47612 35.859 4.47689 34.5046 3.23845C33.1502 2 31.6495 2 28.6481 2H15.3519C12.3505 2 10.8498 2 9.49543 3.23844C8.14103 4.47689 8.0983 5.47612 8.01284 7.47458C8.00431 7.67414 8 7.87478 8 8.07642C8 15.7662 14.268 22 22 22Z"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
