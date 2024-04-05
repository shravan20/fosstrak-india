import React from "react";

const EventCard = ({ event }) => {
  return (
    <>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              event.image ||
              "https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/dd/95/7e/dd957e3a-abd3-da8a-2211-726a67108938/source/256x256bb.jpg"
            }
            alt={event.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{event.name}</h2>
          <p>{event.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore more</button>
          </div>
        </div>
      </div> */}
      {/*  */}
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm"
        data-v0-t="card"
      >
        <div class="p-4">
          <div class="flex items-center gap-4">
            <div class="text-2xl font-semibold">{event.name}</div>
            <div class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-cyan-500 text-white">
              {event.type}
            </div>
          </div>
          <div class="mt-4">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="p-4">
                <div class="text-sm grid gap-1">
                  <p class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Date
                    </span>
                    <span class="font-semibold">{event.startDate}</span>
                  </p>
                  <p class="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4"
                    >
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                      <line x1="9" x2="9" y1="3" y2="18"></line>
                      <line x1="15" x2="15" y1="6" y2="21"></line>
                    </svg>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Location
                    </span>
                    <span class="font-semibold">{event.location}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-sm font-medium leading-tight">
            {event.description}
          </div>
        </div>
        <div class="items-center flex justify-between p-4">
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full max-w-xs">
            Explore &gt;&gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default EventCard;
