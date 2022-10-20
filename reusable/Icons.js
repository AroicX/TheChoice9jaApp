export const ICONS = [
  {
    name: 'thumbs-up',
    count: 10000,
    icon: (props) => (
      <svg
        fill='none'
        {...props}
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
        ></path>
      </svg>
    ),
  },
  {
    name: 'thumbs-down',
    count: 0,
    icon: (props) => (
      <svg
        {...props}
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          stroke='round'
          strokeLinecap='round'
          strokeWidth='2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5'
        ></path>
      </svg>
    ),
  },
  {
    name: 'comments',
    count: 0,
    icon: (props) => (
      <svg
        {...props}
        viewBox='0 0 18 17'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.75 8.5C0.75 4.22902 4.50689 0.875 9 0.875C13.4931 0.875 17.25 4.22902 17.25 8.5C17.25 12.771 13.4931 16.125 9 16.125C8.31485 16.125 7.64714 16.0481 7.00771 15.9014C6.13233 16.4396 5.10154 16.75 4 16.75V16.0001L4.00111 16.75C4.00074 16.75 4.00037 16.75 4 16.75C3.65824 16.7504 3.31713 16.7203 2.98075 16.6599C2.71676 16.6124 2.49819 16.4277 2.4075 16.1752C2.31682 15.9228 2.36783 15.6412 2.54128 15.4366C2.83347 15.092 3.04364 14.6856 3.15597 14.248L3.88112 14.4338L3.15603 14.2478C3.18877 14.1195 3.14112 13.8843 2.85534 13.5884C1.5532 12.2463 0.75 10.4642 0.75 8.5ZM9 2.375C5.20977 2.375 2.25 5.17765 2.25 8.5C2.25 10.0422 2.87822 11.4581 3.93238 12.5443L3.93347 12.5455C4.36708 12.9941 4.83282 13.747 4.60903 14.6203L4.60897 14.6206C4.55541 14.8293 4.48705 15.0332 4.40464 15.231C5.15808 15.16 5.85302 14.8926 6.43968 14.4805C6.62215 14.3523 6.85221 14.3119 7.06741 14.3704C7.67799 14.5362 8.32687 14.625 9 14.625C12.7902 14.625 15.75 11.8223 15.75 8.5C15.75 5.17765 12.7902 2.375 9 2.375Z'
        />
      </svg>
    ),
  },
  {
    name: 'reply',
    count: 42,
    icon: (props) => (
      <svg
        {...props}
        viewBox='0 0 16 13'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1.125 12.3327C0.944444 12.3327 0.795139 12.2737 0.677083 12.1556C0.559028 12.0375 0.5 11.8882 0.5 11.7077V8.70768C0.5 7.61046 0.888889 6.67643 1.66667 5.9056C2.44444 5.13477 3.375 4.74935 4.45833 4.74935H13.125L10.3333 1.95768C10.2222 1.84657 10.1667 1.70768 10.1667 1.54102C10.1667 1.37435 10.2292 1.22852 10.3542 1.10352C10.4792 0.978516 10.625 0.916016 10.7917 0.916016C10.9583 0.916016 11.1042 0.978516 11.2292 1.10352L15.0625 4.93685C15.1319 5.00629 15.1806 5.07574 15.2083 5.14518C15.2361 5.21463 15.25 5.29102 15.25 5.37435C15.25 5.45768 15.2361 5.53407 15.2083 5.60352C15.1806 5.67296 15.1319 5.7424 15.0625 5.81185L11.2083 9.66602C11.0972 9.77713 10.9583 9.83268 10.7917 9.83268C10.625 9.83268 10.4792 9.77018 10.3542 9.64518C10.2292 9.52018 10.1667 9.37435 10.1667 9.20768C10.1667 9.04102 10.2292 8.89518 10.3542 8.77018L13.125 5.99935H4.45833C3.70833 5.99935 3.06944 6.26324 2.54167 6.79102C2.01389 7.31879 1.75 7.95768 1.75 8.70768V11.7077C1.75 11.8882 1.69097 12.0375 1.57292 12.1556C1.45486 12.2737 1.30556 12.3327 1.125 12.3327Z' />
      </svg>
    ),
  },
];