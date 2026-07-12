export function TornEdge({
  fill = '#166938',
  flip = false,
  className = '',
}: {
  fill?: string
  flip?: boolean
  className?: string
}) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        className={`block h-5 w-full md:h-7 ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,28 L0,14 L18,10 L32,16 L51,8 L72,15 L90,6 L108,13 L131,7 L148,17 L170,9 L188,14 L207,5 L228,16 L245,8 L266,13 L288,6 L305,15 L327,9 L348,17 L365,7 L388,12 L406,5 L428,14 L447,8 L468,16 L485,6 L508,13 L527,9 L546,17 L565,7 L588,15 L606,5 L626,12 L647,8 L668,16 L687,6 L708,14 L727,9 L748,17 L766,7 L788,13 L807,5 L828,15 L846,8 L868,12 L887,6 L908,16 L927,9 L948,14 L966,7 L988,17 L1007,5 L1028,13 L1046,8 L1068,15 L1087,6 L1108,12 L1127,9 L1148,17 L1166,7 L1188,14 L1207,5 L1228,16 L1246,8 L1268,13 L1287,6 L1308,15 L1327,9 L1348,17 L1366,7 L1388,12 L1407,5 L1424,13 L1440,9 L1440,28 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
