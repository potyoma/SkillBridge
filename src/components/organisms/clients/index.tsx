import { For } from "solid-js";
import { clients } from "./consts";

export default function Clients() {
  return (
    <ul class="bg-white border-white-95 rounded-md p-3 flex w-full overflow-x-auto">
      <For each={clients}>
        {client => (
          <li class="p-3 px-7 border-r border-r-white-95 last:border-r-0">
            <img
              class="min-h-10 min-w-16"
              src={`/images/clients/${client}.svg`}
              alt={`Client ${client}`}
            />
          </li>
        )}
      </For>
    </ul>
  );
}
