export function consoleCredit() {
  if (typeof window === "undefined") return;
  if (!window.console) return;

  let ua = navigator.userAgent.toLowerCase();

  const logs = [
    {
      log: "%c %c Designed and developed by",
      style: [
        "border-left: 4px solid #6820FE",
        "color: #3D364B; font-size: 0.7rem; font-weight: bold; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
      ],
    },
    {
      log: "%c %cBarry %c & %c Jamie",
      style: [
        "border-left: 4px solid #6820FE",
        "color: #3D364B; font-size: 1rem; font-weight: bold;",
        "background-color: #6820FE; color: #fff; font-size: 1rem; border-radius: 4px; padding: 2px 2px;",
        "color: #3D364B; font-size: 1rem; font-weight: bold;",
      ],
    },
    {
      log: "%c %c https://barryandjamie.studio/",
      style: [
        "border-left: 4px solid #6820FE",
        "color: #3D364B; font-size: 0.7rem; font-weight: bold; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
      ],
    },
  ];

  if (ua.indexOf("chrome") > -1 || ua.indexOf("firefox") > -1) {
    logs.forEach((log) => {
      window.console.log.apply(console, [log.log, ...log.style]);
    });
  } else
    window.console.log("Site by Barry & Jamie - https://barryandjamie.studio/");
}
