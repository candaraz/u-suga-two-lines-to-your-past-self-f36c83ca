# Two Lines to Your Past Self

[![Competition](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/candaraz/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/candaraz/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

An entry for make.fun's [Two Lines to Your Past Self](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca) bounty: exactly two lines — line one warns the writer's past self about one specific moment in a single sentence, and line two says in one sentence why that moment mattered and what changed because of it.

## The entry

> Say it at the dinner table: 'Dad, I don't want the shop, I want the scholarship'.
> You swallowed it instead, and spent six years behind a counter that was never yours.

166 characters, exactly two lines, one sentence per line.

## How it works

`main.ts` (Node 22, standard library only, zero network) writes the two lines byte-exact to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with a single `\n` between the lines and no trailing newline. It guards the gate before writing — 1–280 characters, exactly two lines, one sentence per line — and reads the file back to confirm it matches byte for byte.

## Run it

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` is written.
