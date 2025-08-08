# BuildLess Dash

This is a project I started to make a homelab dashboard which doesn't have to be built every time the configuration changes.

So tapping into some knowledge I had already known about React JS, as well as some new-found knowledge, I built this thing over the course of a few days.

## Features

The reasons and features I built into this is listed below:

- **Simplicity**: The coding is extremely simple, making it so that it's difficult to go wrong.
- **Buildless Config Changes**: As named, the configuration changes don't require a rebuild of the application.
- **Small build sizes**: Taking advantage of Vite's packaging system, it gets the docker image size below 200MB. Other homelab dashboards typically weigh in at ~600MB. Making BuildLess a third of the size.
- **Low resource usage**: It doesn't take a lot of resources away from your server. Since the server just hosts the app the same as it would host a static site.
- **Live config testing**: It has a built-in text editor which allows you to write and test configs. Then you can open it back up to copy it into your text editor to save it to the server.

## Hosting

To host it you just need a webserver. For convenience I did package it as a docker image. So you can host a basic instance of it by running it in docker:

(from directory where you want your files for it)
`mkdir data`
`docker run -d --name bldash --restart unless-stopped -v ./data:/app/data:ro -p 8080:8080 dbob16/bldash:latest`

Then you can create your own config.

`cd data`
`nvim my-conf.json` replace nvim with the editor of your choice.

File structure (an example):

```json
```json
{
  "title": "Enter your server's title here",
  "description": "Description line goes here",
  "sections": [
    {
      "title": "Section 1 title here",
      "description": "Section 1 Description here",
      "color": "#f77",
      "items": [
        {
          "title": "Item 1 Name",
          "description": "Item 1 Description",
          "icon": "Optional filename for icon",
          "url": "URL to link to"
        },
        {
          "title": "Item 2 Name",
          "description": Item 2 Description",
          "icon": "Optional filename for icon",
          "url": "URL to link to"
        }
      ]
    },
    {
      "title": "Section 2 title here",
      "description": "Section 2 Description here",
      "color": "#77f",
      "items": [
        {
          "title": "Item 3 Name",
          "description": "Item 3 Description",
          "url": "URL to link to"
        },
        {
          "title": "Item 4 Name",
          "description": "Item 4 Description",
          "url": "URL to link to"
        }
      ]
    }
  ]
}
```

Edit to your heart's content.

### Icons 

To configure it with your own icons, you just have to make an `icons` directory in your `data` directory, and copy the icons you want to use into it (the `icons` dir). Then specify the icon for each item that you want one for.

### Why JSON?

Yeah, I know some people really don't like JSON, it is messy. But it is natively supported in Javascript, including React. It's the simplest way to allow it to dynamically fetch configurations.

## Hosting on your own server

Pretty much all you have to do is copy and extract one of the release tars to your server, then edit the json file.
