import { For } from 'solid-js'
import { clients } from './consts'

export default function Clients() {
  return (
    <ul class="flex w-full overflow-x-auto rounded-md border-white-95 bg-white p-3">
      <For each={clients}>
        {(client) => (
          <li class="border-r border-r-white-95 p-3 px-7 last:border-r-0">
            <img
              class="min-h-10 min-w-16"
              src={`/images/clients/${client}.svg`}
              alt={`Client ${client}`}
            />
          </li>
        )}
      </For>
    </ul>
  )
}
