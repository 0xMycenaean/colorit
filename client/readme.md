# colorit

Very simple multiplayer puzzle game.

## Description

colorit is a Cairo implantation of a popular mobile from from a decade ago named [Flood Wars](https://play.google.com/store/apps/details?id=com.fva.flood.wars&hl=en_US). Later is a PvP variant of a sigle player game [floodit](https://unixpapa.com/floodit/) - there are multiple implementations of the same game.

### Initial Setup

The repository already contains the `dojo-starter` as a submodule. Feel free to remove it if you prefer.

**Prerequisites:** First and foremost, ensure that Dojo is installed on your system. If it isn't, you can easily get it set up with:

```console
curl -L https://install.dojoengine.org | bash
```

Followed by:

```console
dojoup
```

For an in-depth setup guide, consult the [Dojo book](https://book.dojoengine.org/getting-started/quick-start.html).

### Launch the Example in Under 30 Seconds

After cloning the project, execute the following:

0. **init submodule**

```
git submodule update --init --recursive
```

1. **Terminal 1 - Katana**:

```console
cd dojo-starter && katana --disable-fee
```

2. **Terminal 2 - Contracts**:

```console
cd dojo-starter && sozo build && sozo migrate

// Basic Auth - This will allow burner Accounts to interact with the contracts
sh ./dojo-starter/scripts/default_auth.sh
```

3. **Terminal 3 - Client**:

```console
cd client && yarn && yarn dev
```

or if using bun

```console
cd client && bun install && bun dev
```

4. **Terminal 4 - Torii**:

Uncomment the 'world_address' parameter in `dojo-starter/Scarb.toml` then:

```console
cd dojo-starter && torii
```

Upon completion, launch your browser and navigate to http://localhost:5173/. You'll be greeted by the running example!
