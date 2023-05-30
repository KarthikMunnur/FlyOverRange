import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <ul className="main-menu-list">
        <li>
          <Link to="/events">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 5.28988H13C13 5.7323 13.2907 6.12213 13.7148 6.24833L14 5.28988ZM15.3302 5.84137L14.8538 6.72058C15.2429 6.93144 15.7243 6.86143 16.0373 6.54847L15.3302 5.84137ZM16.2426 4.92891L15.5355 4.2218V4.2218L16.2426 4.92891ZM17.6569 4.92891L16.9498 5.63601L16.9498 5.63602L17.6569 4.92891ZM19.0711 6.34312L19.7782 5.63602V5.63602L19.0711 6.34312ZM19.0711 7.75734L18.364 7.05023L19.0711 7.75734ZM18.1586 8.66978L17.4515 7.96268C17.1386 8.27563 17.0686 8.75709 17.2794 9.14621L18.1586 8.66978ZM18.7101 10L17.7517 10.2853C17.8779 10.7093 18.2677 11 18.7101 11V10ZM18.7101 14V13C18.2677 13 17.8779 13.2907 17.7517 13.7148L18.7101 14ZM18.1586 15.3302L17.2794 14.8538C17.0686 15.2429 17.1386 15.7244 17.4515 16.0373L18.1586 15.3302ZM19.0711 16.2427L19.7782 15.5356V15.5356L19.0711 16.2427ZM19.0711 17.6569L18.364 16.9498L18.364 16.9498L19.0711 17.6569ZM17.6569 19.0711L18.364 19.7782V19.7782L17.6569 19.0711ZM15.3302 18.1586L16.0373 17.4515C15.7243 17.1386 15.2429 17.0686 14.8538 17.2794L15.3302 18.1586ZM14 18.7101L13.7148 17.7517C13.2907 17.8779 13 18.2677 13 18.7101H14ZM10 18.7101H11C11 18.2677 10.7093 17.8779 10.2853 17.7517L10 18.7101ZM8.6698 18.1586L9.14623 17.2794C8.7571 17.0685 8.27565 17.1385 7.96269 17.4515L8.6698 18.1586ZM7.75736 19.071L7.05026 18.3639L7.05026 18.3639L7.75736 19.071ZM6.34315 19.071L5.63604 19.7782H5.63604L6.34315 19.071ZM4.92894 17.6568L4.22183 18.3639H4.22183L4.92894 17.6568ZM4.92894 16.2426L4.22183 15.5355H4.22183L4.92894 16.2426ZM5.84138 15.3302L6.54849 16.0373C6.86144 15.7243 6.93146 15.2429 6.7206 14.8537L5.84138 15.3302ZM5.28989 14L6.24835 13.7147C6.12215 13.2907 5.73231 13 5.28989 13V14ZM5.28989 10V11C5.73231 11 6.12215 10.7093 6.24835 10.2852L5.28989 10ZM5.84138 8.66982L6.7206 9.14625C6.93146 8.75712 6.86145 8.27567 6.54849 7.96272L5.84138 8.66982ZM4.92894 7.75738L4.22183 8.46449H4.22183L4.92894 7.75738ZM4.92894 6.34317L5.63605 7.05027H5.63605L4.92894 6.34317ZM6.34315 4.92895L7.05026 5.63606L7.05026 5.63606L6.34315 4.92895ZM7.75737 4.92895L8.46447 4.22185V4.22185L7.75737 4.92895ZM8.6698 5.84139L7.9627 6.54849C8.27565 6.86145 8.7571 6.93146 9.14623 6.7206L8.6698 5.84139ZM10 5.28988L10.2853 6.24833C10.7093 6.12213 11 5.7323 11 5.28988H10ZM11 2C9.89545 2 9.00002 2.89543 9.00002 4H11V4V2ZM13 2H11V4H13V2ZM15 4C15 2.89543 14.1046 2 13 2V4H15ZM15 5.28988V4H13V5.28988H15ZM15.8066 4.96215C15.3271 4.70233 14.8179 4.48994 14.2853 4.33143L13.7148 6.24833C14.1132 6.36691 14.4944 6.52587 14.8538 6.72058L15.8066 4.96215ZM15.5355 4.2218L14.6231 5.13426L16.0373 6.54847L16.9498 5.63602L15.5355 4.2218ZM18.364 4.2218C17.5829 3.44075 16.3166 3.44075 15.5355 4.2218L16.9498 5.63602V5.63601L18.364 4.2218ZM19.7782 5.63602L18.364 4.2218L16.9498 5.63602L18.364 7.05023L19.7782 5.63602ZM19.7782 8.46444C20.5592 7.68339 20.5592 6.41706 19.7782 5.63602L18.364 7.05023L18.364 7.05023L19.7782 8.46444ZM18.8657 9.37689L19.7782 8.46444L18.364 7.05023L17.4515 7.96268L18.8657 9.37689ZM19.6686 9.71475C19.5101 9.18211 19.2977 8.67285 19.0378 8.19335L17.2794 9.14621C17.4741 9.50555 17.6331 9.8868 17.7517 10.2853L19.6686 9.71475ZM18.7101 11H20V9H18.7101V11ZM20 11H22C22 9.89543 21.1046 9 20 9V11ZM20 11V13H22V11H20ZM20 13V15C21.1046 15 22 14.1046 22 13H20ZM20 13H18.7101V15H20V13ZM19.0378 15.8066C19.2977 15.3271 19.5101 14.8179 19.6686 14.2852L17.7517 13.7148C17.6331 14.1132 17.4741 14.4944 17.2794 14.8538L19.0378 15.8066ZM19.7782 15.5356L18.8657 14.6231L17.4515 16.0373L18.364 16.9498L19.7782 15.5356ZM19.7782 18.364C20.5592 17.5829 20.5592 16.3166 19.7782 15.5356L18.364 16.9498H18.364L19.7782 18.364ZM18.364 19.7782L19.7782 18.364L18.364 16.9498L16.9498 18.364L18.364 19.7782ZM15.5355 19.7782C16.3166 20.5592 17.5829 20.5592 18.364 19.7782L16.9498 18.364L15.5355 19.7782ZM14.6231 18.8657L15.5355 19.7782L16.9498 18.364L16.0373 17.4515L14.6231 18.8657ZM14.2853 19.6686C14.8179 19.5101 15.3271 19.2977 15.8066 19.0378L14.8538 17.2794C14.4944 17.4741 14.1132 17.6331 13.7148 17.7517L14.2853 19.6686ZM15 20V18.7101H13V20H15ZM13 22C14.1046 22 15 21.1046 15 20H13V22ZM11 22H13V20H11V22ZM9.00002 20C9.00002 21.1046 9.89545 22 11 22V20H9.00002ZM9.00002 18.7101V20H11V18.7101H9.00002ZM8.19337 19.0378C8.67287 19.2977 9.18213 19.5101 9.71477 19.6686L10.2853 17.7517C9.88681 17.6331 9.50557 17.4741 9.14623 17.2794L8.19337 19.0378ZM8.46447 19.7782L9.3769 18.8657L7.96269 17.4515L7.05026 18.3639L8.46447 19.7782ZM5.63604 19.7782C6.41709 20.5592 7.68342 20.5592 8.46447 19.7781L7.05026 18.3639L5.63604 19.7782ZM4.22183 18.3639L5.63604 19.7782L7.05026 18.3639L5.63604 16.9497L4.22183 18.3639ZM4.22183 15.5355C3.44078 16.3166 3.44078 17.5829 4.22183 18.3639L5.63604 16.9497V16.9497L4.22183 15.5355ZM5.13427 14.6231L4.22183 15.5355L5.63604 16.9497L6.54849 16.0373L5.13427 14.6231ZM4.33144 14.2852C4.48996 14.8179 4.70234 15.3271 4.96217 15.8066L6.7206 14.8537C6.52589 14.4944 6.36693 14.1132 6.24835 13.7147L4.33144 14.2852ZM5.28989 13H4V15H5.28989V13ZM4 13H4H2C2 14.1046 2.89543 15 4 15V13ZM4 13V11H2V13H4ZM4 11V9C2.89543 9 2 9.89543 2 11H4ZM4 11H5.28989V9H4V11ZM4.96217 8.1934C4.70235 8.67288 4.48996 9.18213 4.33144 9.71475L6.24835 10.2852C6.36693 9.88681 6.52589 9.50558 6.7206 9.14625L4.96217 8.1934ZM4.22183 8.46449L5.13428 9.37693L6.54849 7.96272L5.63605 7.05027L4.22183 8.46449ZM4.22183 5.63606C3.44078 6.41711 3.44079 7.68344 4.22183 8.46449L5.63605 7.05027L5.63605 7.05027L4.22183 5.63606ZM5.63605 4.22185L4.22183 5.63606L5.63605 7.05027L7.05026 5.63606L5.63605 4.22185ZM8.46447 4.22185C7.68343 3.4408 6.4171 3.4408 5.63605 4.22185L7.05026 5.63606V5.63606L8.46447 4.22185ZM9.37691 5.13428L8.46447 4.22185L7.05026 5.63606L7.9627 6.54849L9.37691 5.13428ZM9.71477 4.33143C9.18213 4.48995 8.67287 4.70234 8.19337 4.96218L9.14623 6.7206C9.50557 6.52588 9.88681 6.36692 10.2853 6.24833L9.71477 4.33143ZM9.00002 4V5.28988H11V4H9.00002Z"
                fill="#000000"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="name">Events</div>
          </Link>
        </li>
       <li>
          <Link to="/competitor">
            <svg
              fill="#000000"
              height="800px"
              width="800px"
              viewBox="0 0 496 496"
            >
              <g>
                <g>
                  <path
                    d="M483.712,424.4L379.312,320l18.344-18.344l-11.312-11.312L368,308.688l-13.936-13.936
                 c17.576-27.624,28.296-60,29.728-94.752h3.92l29.624,44.44l13.312-8.872L406.944,200h12.768l29.624,44.44l13.312-8.872
                 L438.944,200h12.768l29.624,44.44l13.312-8.872L465.616,192l29.04-43.56l-13.312-8.872L451.72,184h-12.768l23.712-35.56
                 l-13.312-8.872L419.72,184h-12.768l23.712-35.56l-13.312-8.872L387.72,184h-3.92C379.584,81.832,295.184,0,192,0
                 C86.136,0,0,86.136,0,192s86.136,192,192,192c37.784,0,73.016-11.016,102.752-29.936L308.688,368l-18.344,18.344l11.312,11.312
                 L320,379.312l104.4,104.4c7.92,7.92,18.456,12.288,29.656,12.288C477.184,496,496,477.184,496,454.056
                 C496,442.856,491.64,432.328,483.712,424.4z M192,368c-97.048,0-176-78.952-176-176S94.952,16,192,16
                 c94.368,0,171.6,74.656,175.8,168h-24.2C339.392,103.912,273.112,40,192,40c-83.816,0-152,68.184-152,152s68.184,152,152,152
                 c81.112,0,147.392-63.912,151.592-144h24.2C363.6,293.344,286.368,368,192,368z M210.344,154.344L172.688,192l37.656,37.656
                 l11.312-11.312L203.312,200h44.048c-3.904,27.096-27.208,48-55.36,48c-30.88,0-56-25.12-56-56s25.12-56,56-56
                 c28.152,0,51.456,20.904,55.36,48h-44.048l18.344-18.344L210.344,154.344z M192,120c-39.696,0-72,32.304-72,72s32.304,72,72,72
                 c36.992,0,67.528-28.056,71.528-64h24.064c-4.088,49.192-45.36,88-95.592,88c-52.936,0-96-43.064-96-96c0-52.936,43.064-96,96-96
                 c50.232,0,91.504,38.808,95.592,88h-24.064C259.528,148.056,228.992,120,192,120z M192,80c-61.76,0-112,50.24-112,112
                 s50.24,112,112,112c59.056,0,107.464-45.976,111.592-104h24C323.416,271.264,264.288,328,192,328c-74.992,0-136-61.008-136-136
                 S117.008,56,192,56c72.288,0,131.416,56.736,135.592,128h-24C299.464,125.976,251.056,80,192,80z M308.096,344.784
                 c13.816-10.52,26.16-22.872,36.688-36.688L356.688,320L320,356.688L308.096,344.784z M454.056,480
                 c-6.928,0-13.44-2.696-18.344-7.6L331.312,368L368,331.312l104.4,104.4c4.896,4.904,7.6,11.416,7.6,18.344
                 C480,468.36,468.36,480,454.056,480z"
                  />
                </g>
              </g>
            </svg>
            <div className="name">Competitor</div>
          </Link>
        </li>
        <li>
          <Link to="/horses">
            <svg
              height="800px"
              width="800px"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
            >
              {/* <style type="text/css">
                  .st0 {
                    fill: #000000;
                  }
                </style> */}
              <g>
                <path
                  className="st0"
                  d="M511.885,328.618c0.246-3.99,0.084-9.008-0.363-14.603c-0.1-22.314-1.552-44.52-10.281-65.406
		c-18.076-43.2-60.173-60.581-104.692-60.581c-0.933,0-1.876,0-2.81,0c-18.94-1.166-38.399-0.61-56.876,0
		c-33.522,0-67.05,0-100.571,0c-0.131,0-3.249-9.1-6.553-18.648c-0.154-0.432-0.293-0.864-0.447-1.297
		c-3.165-9.122-6.375-18.308-7.209-20.06c-5.518-11.593-12.303-22.615-20.469-32.54c-17.02-20.686-39.896-35.937-65.583-43.586
		c-22.638-6.738-50.609-9.516-73.139-1.111c-4.901-0.74-9.363-3.142-14.009-5.503c-1.559-0.826-3.141-1.613-4.762-2.292
		c-4.029-1.791-8.328-3.172-13.284-3.172c-12.882,0-19.311,6.514-16.24,19.744c0.394,1.698,1.645,4.345,3.234,7.402
		c3.01,7.078,8.745,15.035,10.852,22.167c0.27,1.119,0.363,2.046,0.162,2.694c-1.691,5.48-3.388,10.96-5.079,16.44
		c-3.257,10.566-6.522,21.125-9.795,31.691C6.324,179.005-4.845,205.603,2.279,220.53c2.192,5.495,6.345,10.597,13.484,15.12
		c5.673,3.55,10.867,4.87,15.76,4.793c0.556,0.031,1.112,0.147,1.668,0.147c4.924,0,9.432-2.131,13.646-5.087
		c11.107-6.768,21.103-18.755,32.309-25.478c5.634-3.38,11.046-1.567,16.07,3.597c1.119,1.521,2.262,3.272,3.435,5.41
		c5.241,9.524,10.127,19.628,14.395,30.048c9.748,30.172,14.912,67.929,12.04,79.399c-5.781,23.108-14.526,45.685-23.804,67.752
		c-1.984,4.221-3.921,8.513-5.418,12.797c-0.186,0.424-0.363,0.865-0.549,1.289c-9.277,21.542,7.202,41.81,30.766,41.864
		c-1.459-0.008-3.581-0.008,0.039,0c1.613,0,0.98,0,0.023,0c2.57-0.008,5.14-0.718,7.703-1.914c5.48-1.42,10.451-4.5,13.901-9.965
		c1.143-1.806,2.277-3.604,3.412-5.403c8.868-11.137,17.536-26.212,25.833-40.9c6.013-9.517,12.026-19.034,18.03-28.55
		c1.652-2.608,3.821-6.761,6.367-10.837c6.577-8.181,12.72-12.45,18.308-9.578c33.252,17.088,84.408,15.537,117.713-0.718
		c0.594-0.293,1.25-0.301,1.906-0.324c0.355-0.008,0.726-0.039,1.066-0.016c4.106,0.625,9.223,5.503,14.533,12.257
		c0.518,0.803,1.034,1.613,1.551,2.424c7.016,11.052,14.032,22.105,21.048,33.158c3.504,6.252,6.159,11.176,7.332,13.02
		c6.468,10.188,12.937,20.377,19.412,30.573c12.419,19.558,45.122,21.156,56.645-0.548c10.111-18.779-11.06-47.769-18.084-64.194
		c-10.474-24.544-16.626-43.941-16.417-70.561c0.046-6.306-0.888-59.471,7.124-55.434c4.554,2.269,7.572,6.792,9.54,12.526
		c2.562,11.787,2.686,28.998,2.253,44.527c-0.602,6.592-1.32,12.342-1.713,16.225c-0.957,9.292-3.542,15.984,0.803,18.987
		c0.108,0.617,0.247,0.988,0.455,0.988c0.517,0,1.035,0,1.552,0c1.59,0.517,3.697,0.787,6.468,0.787c15.7,0,31.398,0,47.098,0
		c2.625,0,4.523-0.324,6.144-0.787c0.625,0,1.25,0,1.876,0c1.628,0,2.678-1.714,3.296-4.592
		C511.715,331.999,511.877,330.409,511.885,328.618z M17.654,220.083c-1.166-1.459-2.285-3.227-3.365-5.31
		c-0.826-2.871-0.934-6.561-0.455-10.836c2.014-8.414,7.224-18.771,9.068-24.715c4.794-15.428,9.578-30.858,14.333-46.294
		c1.297-4.206,9.107-19.536,6.375-24.274c-1.567-11.577-14-21.858-15.56-34.501c11.624-0.764,22.298,4.091,29.747,12.952
		c1.482,1.767,5.356,10.048,8.436,10.048c4.763,1.892,15.198-0.332,20.732,0.572c13.63,2.215,26.69,7.432,38.352,14.773
		c21.796,13.708,38.167,34.44,50.131,56.977c10.667,20.099,19.15,32.78,44.172,32.78c54.877,0,109.755,0,164.633,0
		c5.233,0,12.287-1.266,17.412,0c10.906,0,15.83,12.959,18.022,21.642c2.902,11.477-4.268,14.596-6.027,26.119
		c-0.518,3.372-0.742,6.861-1.043,10.327c-2.091,14.773-2.161,29.53-0.64,44.126c0.084,3.496,0.177,7.016,0.224,10.427
		c0.363,26.582,12.928,51.281,23.564,75.147c5.048,11.33,7.858,11.176-2.462,16.494c-6.9,3.558-13.808,7.108-20.708,10.659
		c-4.978,2.57-12.072-14.186-14.604-18.177c-10.728-16.88-33.027-69.766-57.734-69.766c-10.064,0.733-20.059,6.869-29.978,9.015
		c-22.746,4.924-47.823,5.156-70.4-0.872c-13.33-3.558-24.667-13.97-38.121-3.419c-8.244,6.452-13.53,17.058-19.056,25.81
		c-3.18,5.033-34.795,57.919-36.67,56.946c-10.242-5.272-20.477-10.536-30.719-15.807c-0.656-0.34,20.306-57,22.075-63.344
		c12.241-43.894-8.159-99.212-33.336-135.511c-23.147-33.375-54.986,28.071-77.724,23.764
		C23.505,224.929,20.61,223.023,17.654,220.083z"
                />
                <path
                  className="st0"
                  d="M55.166,156.9c14.271,0,14.271-22.129,0-22.129C40.886,134.771,40.886,156.9,55.166,156.9z"
                />
              </g>
            </svg>
            <div className="name">Horses</div>
          </Link>
        </li>
        <li>
          <Link to="/judge">
            <svg>
              <path
                d="M20.0101 18.5101L15.0601 13.5601"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 21H8"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.56006 7.92004L13.6301 14.99"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="name">Judge</div>
          </Link>
        </li>
        <li>
          <Link to="/riders">
            <svg width="800px" height="800px" viewBox="0 0 64 64">
              <path
                d="M10.213 18.436c.661-.804.268-2.783.268-2.783s-1.298 1.025-1.886 3.179c0-.001.959.405 1.618-.396"
                fill="#000000"
              ></path>
              <path
                d="M4.339 25.691c-.068.526.375 2.866.846 1.349c.468-1.519-.846-1.349-.846-1.349"
                fill="#000000"
              ></path>
              <path
                d="M59.183 48.074c-.767-.482-1.81-1.303-2.852-2.592c.074-1.691-.677-2.786-.787-2.933l-.321-.43l-.526-.119c-.164-.038-.334-.058-.503-.084a20.322 20.322 0 0 1-1.146-3.436l-.225-.939a10.868 10.868 0 0 0-.107-5.523c1.978-.075 3.832.434 2.822 2.935c-2.13 5.275 6.462 9.69 6.462 9.69s-4.725-7.389-1.146-12.885c2.139-3.285-4.744-5.207-9.413-2.502c-1.147-1.695-2.776-2.77-4.644-3.041c1.131-1.705 1.094-3.555-.025-5.929l.105-.099l-.287-.303l-.182-.36l-.121.054c-1.178-1.152-6.408-5.877-12.717-5.562l-.467-1.142c.594-.728.959-1.737.976-2.977c.644.03 1.062-.087 1.077-.479c.162-3.932-3.026-7.249-7.12-7.414c-4.094-.163-7.545 2.89-7.709 6.821c0 .018.01.029.012.046l-.006.002c-.505.362-1.886 1.555-1.878 2.187a14.798 14.798 0 0 0-5.11-.955c-1.235-2.137-2.621-3.121-2.621-3.121a10.337 10.337 0 0 0-.129 1.458c-.962-.534-1.683-.7-1.818-.727l-1.625-.314l-.115 1.637c-.129 1.836.344 3.461.629 4.246c-.586 2.084-2.944 6.899-4.248 9.563c-.736 1.503-1.127 2.307-1.275 2.69c-.773 2.005 1.789 4.024 3.385 5.05l.492.316l.576-.108c.241-.045.449-.126.631-.223c.188.227.438.399.725.495c.191.063.391.097.593.097c1.05 0 1.729-.813 2.386-1.599c.447-.535.953-1.141 1.473-1.423c1.102-.598 2.018-1.196 2.753-1.802c-.303.868-.683 1.58-.776 1.751c-2.148 3.902-1.019 8.992-.346 11.229c-1.953 1.063-5.063 1.835-6.256 2.069l-.971.19l-.184.964C4.609 53.098 8.58 56.95 11.125 58.308c1.376.731 2.518.844 2.644.854l1.396.117l.179-1.378l.549-4.245l.216-1.673l-1.701.039a5.66 5.66 0 0 1-1.33-.175c-.479-.128-1.08-.369-1.234-.808c-.307-.869-.019-2.893.369-4.541c.564.038 1.123.059 1.674.059c.806 0 1.568-.048 2.305-.119a6.621 6.621 0 0 1-.24.271c-1.077 1.122-.986 2.245-.838 2.815c.311 1.182 1.337 1.992 2.158 2.244c.525.159 3.803.491 9.746.989l.606.05l.464-.391c.008-.006 1.05-.868 2.299-1.351c.525-.203.994-.305 1.396-.305c.068 0 .137.003.205.01l2.532.244l-1.06-2.293c-.138-.298-1.41-2.948-3.439-3.957l-.768-.382l-.711.478c-.025.018-.628.423-1.382.986c-.448.336-1.026.785-1.562 1.252l-.445-.129c.896-.934 2.277-2.171 4.162-3.394c.471-.033.951-.055 1.447-.055c.58 0 1.156.031 1.734.072c-.59.42-.93.755-1.002 1c-.219.725.332 1.272.938 1.474l.102.021c.029.004.733.085 1.844.085c1.05 0 2.571-.078 4.227-.398c2.396 3.127 5.428 3.869 7.733 3.869c1.251 0 2.421-.212 3.405-.483c-1 5.083.568 8.65 1.727 10.463c.803 1.252 1.546 1.916 1.627 1.988l.442.389l.59-.026c2.525-.111 3.174-3.599 3.313-4.664l.107-.829l-.669-.508a5.865 5.865 0 0 1-.843-.771a4.57 4.57 0 0 1-1.143-2.507c.435.422.88.837 1.352 1.228c.78.653 1.607 1.241 2.451 1.743l1.471.873l.639-1.577c.037-.091.893-2.228.955-4.697l.027-1.118l-1.084-.312c0-.001-.629-.195-1.522-.761m-6.607-6.237c-.121.004-.246.005-.365.01c-.215.009-.428.02-.641.02c-.327 0-.645-.018-.996-.141a8.746 8.746 0 0 0 1.334-1.843c.201.697.426 1.345.668 1.954M44.65 27.13c-2.189 1.916-7.857 3.929-7.914 3.949l-.573.202l.313.513c.977 1.603 1.287 2.574 1.387 3.035c-.369.282-1.186.726-2.68.904a19.805 19.805 0 0 0-.291-.532c-.67-1.198-1.791-3.202-1.246-4.518c1.077-2.583 6.267-6.974 6.845-7.457l5.441-2.414c1.422 3.087.601 4.673-1.282 6.318m-11.254-.098c.217-.172 1.793-1.023 3.566-1.963a37.504 37.504 0 0 0-2.243 2.338a13.53 13.53 0 0 1-1.679-.012c.106-.137.222-.248.356-.363m-.652-.744c-.327.279-.579.557-.784.972a3.952 3.952 0 0 1-1.116-.376l3.293-4.899l4.657 1.009c-2.147 1.118-5.679 2.978-6.05 3.294m-.369-12.691l.383 1.068c-.063.099-.451.523-.539.65c.05-.204.132-1.506.156-1.718m1.355 1.387c5.374-.26 10.072 3.646 11.571 5.03l-5.135 2.277l-6.485-1.413l-3.728 5.545H23.12c.028-.24.047-.503.048-.813l.005-.747c1.405-.138 3.903-.302 5.599-.397l.381-.021l1.349-6.258c1.784-.949 2.859-2.573 3.228-3.203m-5.71 5.689a25.602 25.602 0 0 0-1.195-2.209c.173.041.354.067.549.067c.619 0 1.296-.213 2.144-.522l-.264 1.225l-1.234 1.439m.794.599l-.173.801c-.058-.138-.103-.263-.165-.406l.338-.395m.62-12.241c.079.015.161.033.239.049c-.068.356-.043.743.119 1.096c.273.594.877.556.877.556c-.387-.503-.481-1.059-.466-1.544c.647.134 1.298.276 1.911.405c.006.013.006.023.01.036l-1.059 2.86l-2.114-3.02c.132-.138.298-.288.483-.438m-1.682.468l2.735 3.909l.525 2.504s-.92.775-1.273.964c-.541.29-1.796.673-2.366.673c-.571 0-.954-.283-1.247-1.027c-.294.206-.817.257-1.027.186c-.34-.115-.271-.495-.115-.854c.157-.25.318-.472.424-.604c-.084.13-.192.312-.29.503c-.226.443-.01.61.47.013c.227-.28.665-1.255.665-1.255s-1.3 1.009-2.003 1.04c-.248.011-.245-.377-.631-.765c-.145.091-.404.146-.67.146c-.546 0-1.118-.236-.775-.882c.229-.43.658-1.249.549-1.567c-.146-.427-.545-.829-.788-1.496c1.917-.43 4.266-1.059 5.817-1.488m-6.807 1.697c.171.521.414.908.611 1.216c.058.092.117.185.16.263a1.74 1.74 0 0 1-.039.109a14.763 14.763 0 0 0-2.307-1.343c.392-.03.932-.117 1.575-.245M8.497 9.139s1.921.372 3.769 2.581c0 0 .609-.157 1.615-.157c1.652 0 4.375.452 7.211 2.696c-.037.393.076.7.184.872c.297.482.881.759 1.604.776c1.633 1.762 3.232 4.234 4.631 7.649c-1.301.079-3.225.207-4.48.334a1.654 1.654 0 0 0-.346-.501a1.704 1.704 0 0 0-1.203-.49l-.518-.002h-.01c-.438 0-.846.16-1.152.438c-1.15.213-1.883.927-2.051 1.992c-.271-.054-.543-.104-.811-.166c.143-1.015.063-2.021-.477-2.825a.033.033 0 0 0 .006-.008c-.666-1.442-1.224-2.8-2.088-4.031a21.988 21.988 0 0 0-2.684-3.164c-.985-.954-2.049-1.535-2.504-1.955c.002.001-.851-1.849-.696-4.039m13.676 15.42l-.006 1.046c-.007 1.465-.007 1.55-1.73 1.55l-.334-.001c-1.395-.004-1.389-1.149-1.389-1.354c.006-1.251.918-1.493 1.613-1.539a.698.698 0 0 1 .627-.38h.004l.521.002a.681.681 0 0 1 .694.676M6.322 29.371s-3.279-2.107-2.813-3.316c.434-1.131 4.537-8.951 5.523-12.247c-.014.049-.028.1-.043.144c.436.408 1.389.907 2.211 1.701c.516.5 1.088 1.163 1.684 1.979c-.545.773-2.193 2.877-6.271 6.649c-.627-.815-1.194-1.358-1.517-1.542l-.308.63c.229.137.455.294.89.726c.622.618 1.77 2.313 2.435 4.146c.082-.04.225-.043.355-.035c-1.308.077-1.503 1.044-2.146 1.165m5.378-2.5c-1.495.81-2.415 2.844-3.156 2.844a.415.415 0 0 1-.125-.021c-.373-.123.466-1.236.346-1.455l.015.002a15.36 15.36 0 0 0-1.742-3.371a94.589 94.589 0 0 0 1.921-1.826c.593.271 1.712.754 3.382 1.36c.692.253 1.37.476 2.038.681c-.633.546-1.495 1.143-2.679 1.786m3.179-2.255a39.793 39.793 0 0 1-2.323-.764a48.136 48.136 0 0 1-3.143-1.255c2.221-2.2 3.371-3.606 3.908-4.339c.859 1.263 1.754 2.82 2.6 4.669c-.11.466-.404 1.034-1.042 1.689m7.726 23.125l3.378.983c.519-.514 1.22-1.079 1.851-1.56c.509.559 1.153 1.42 1.774 2.657c-1.392.591-2.47 1.491-2.47 1.491s-8.802-.737-9.436-.929c-.633-.194-1.951-1.365-.692-2.676c.306-.317.759-.891 1.267-1.563c1.789-.328 3.424-.806 5.021-1.278a66.876 66.876 0 0 1 2.875-.804c-2.453 2.006-3.568 3.679-3.568 3.679m8.156-5.668c-1.594 0-3.204.154-4.834.555c-3.828.939-7.26 2.479-12.043 2.479c-.875 0-1.797-.052-2.773-.168c0 0-1.364 4.554-.65 6.578c.352 1.002 1.332 1.491 2.234 1.729c.02.005.037.007.055.012c-.266.855-.63 2.207-.877 3.798l-.054-.025C9.49 55.79 6.244 52.336 8.06 42.814c0 0 5.318-1.04 7.719-2.887c0 0-2.598-6.633-.115-11.141c.438-.798.929-1.901 1.181-3.036c.302.068.59.12.882.176c.059 1.344.973 2.205 2.375 2.209l.336.001c1.303 0 2.006-.175 2.373-.73h6.357c.512.645 1.871 2.637.722 4.401c-1.284 1.971.96 5.011 4.607 5.897l.254 1.354c-.124.84-.404 1.941-1.021 3.187a29.675 29.675 0 0 0-2.969-.172m3.616 3.12c-.861 0-1.469-.052-1.662-.071c-.091-.039-.298-.138-.281-.204c.218-.347 2.064-1.452 3.648-2.278l.324-.169l-1.069-5.7c.697-.005 1.835-.13 2.796-.74l.751 8.688a21.29 21.29 0 0 1-4.507.474m20.445 10.818c-.369.815-1.078 2.053-2.17 2.752c-1.329-2.123-2.828-6.155-.723-12.012c0 0-2.544 1.445-5.593 1.445c-2.126 0-4.493-.724-6.418-3.111l-.653-7.519c.442-.129.889-.279 1.34-.479c3.604-1.597 1.927-4.935 1.742-7.34c1.139-.583 2.223-1.231 2.967-1.883c.104-.09.182-.182.277-.272c.094-.005.188-.017.279-.017c1.854.001 3.363 1.009 4.379 2.514l-.002.002c.416.618.75 1.32.989 2.07h.002c1.042 3.268.31 7.456-3.059 9.665c1.317 1.288 2.352 1.49 3.39 1.49c.475 0 .951-.042 1.456-.042c.422 0 .864.029 1.342.139c0 0 .929 1.241.29 3.168c-.569 1.731-2.645 6.093.165 9.43m2.525-3.076c-.052-.043-.108-.08-.161-.125c-.805-.668-1.533-1.404-2.225-2.157c.17-.988.498-1.98.842-2.923c.063-.171.109-.31.162-.454a13.07 13.07 0 0 0 2.431 2.022l.153.092c-.334 1.64-.795 2.778-1.202 3.545"
                fill="#000000"
              ></path>
              <path
                d="M24.221 12.981c.308-.142.393-.612.192-1.05c-.202-.438-.615-.678-.922-.537c-.307.142-.232.537-.031.976c.203.438.454.753.761.611"
                fill="#000000"
              ></path>
            </svg>
            <div className="name">Riders</div>
          </Link>
        </li>
        <li>
          <Link to="announcements">
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1587.162 31.278c11.52-23.491 37.27-35.689 63.473-29.816 25.525 6.099 43.483 28.8 43.483 55.002V570.46C1822.87 596.662 1920 710.733 1920 847.053c0 136.32-97.13 250.503-225.882 276.705v513.883c0 26.202-17.958 49.016-43.483 55.002a57.279 57.279 0 0 1-12.988 1.468c-21.12 0-40.772-11.745-50.485-31.171C1379.238 1247.203 964.18 1242.347 960 1242.347H564.706v564.706h87.755c-11.859-90.127-17.506-247.003 63.473-350.683 52.405-67.087 129.657-101.082 229.948-101.082v112.941c-64.49 0-110.57 18.861-140.837 57.487-68.781 87.868-45.064 263.83-30.269 324.254 4.18 16.828.34 34.673-10.277 48.34-10.73 13.665-27.219 21.684-44.499 21.684H508.235c-31.171 0-56.47-25.186-56.47-56.47v-621.177h-56.47c-155.747 0-282.354-126.607-282.354-282.353v-56.47h-56.47C25.299 903.523 0 878.336 0 847.052c0-31.172 25.299-56.471 56.47-56.471h56.471v-56.47c0-155.634 126.607-282.354 282.353-282.354h564.593c16.941-.112 420.48-7.002 627.275-420.48Zm-5.986 218.429c-194.71 242.371-452.216 298.164-564.705 311.04v572.724c112.489 12.876 369.995 68.556 564.705 311.04ZM903.53 564.7H395.294c-93.402 0-169.412 76.01-169.412 169.411v225.883c0 93.402 76.01 169.412 169.412 169.412H903.53V564.7Zm790.589 123.444v317.93c65.618-23.379 112.94-85.497 112.94-159.021 0-73.525-47.322-135.53-112.94-158.909Z"
                fill-rule="evenodd"
              />
            </svg>
            <div className="name">Announcements</div>
          </Link>
        </li>
        <li>
          <Link to="maps">
            <svg width="36.767" height="48.001" viewBox="0 0 36.767 48.001">
              <g>
                <path
                  d="M23.143,37.881C27.321,31.805,33.1,22.072,33.1,14.717a14.718,14.718,0,0,0-29.435,0c0,7.357,5.783,17.094,9.961,23.168C6.3,38.391,0,40.074,0,42.858,0,46.235,9.248,48,18.383,48s18.384-1.766,18.384-5.143C36.767,40.075,30.474,38.387,23.143,37.881ZM5.121,14.717a13.264,13.264,0,0,1,26.527,0c0,9.492-10.665,23.852-13.264,27.209C15.786,38.569,5.121,24.213,5.121,14.717ZM18.383,46.546c-10.334,0-16.929-2.184-16.929-3.688,0-1.309,5.03-3.123,13.155-3.57,1.741,2.449,3.039,4.063,3.209,4.273a.729.729,0,0,0,1.129,0c.17-.211,1.469-1.826,3.213-4.277,8.125.447,13.151,2.266,13.151,3.574C35.313,44.362,28.718,46.546,18.383,46.546Z"
                  fill="#1a171b"
                />
                <path
                  d="M26.383,14.848a8,8,0,1,0-8,8A8.009,8.009,0,0,0,26.383,14.848Zm-14.545,0a6.546,6.546,0,1,1,6.545,6.545A6.555,6.555,0,0,1,11.838,14.848Z"
                  fill="#1a171b"
                />
              </g>
            </svg>
            <div className="name">Maps</div>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <svg width="800px" height="800px" viewBox="0 0 192 192" fill="none">
              <path
                stroke="#000000"
                stroke-width="12"
                d="M30 40c0-5.523 4.477-10 10-10h112c5.523 0 10 4.477 10 10v112c0 5.523-4.477 10-10 10H40c-5.523 0-10-4.477-10-10V40Z"
              />
              <path
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="m30 138 34-34 24 24 40-40 34 34"
              />
            </svg>
            <div className="name">Gallery</div>
          </Link>
        </li>
        
      </ul>
    </div>
  );
}
