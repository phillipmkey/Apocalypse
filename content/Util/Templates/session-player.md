---
type: session
world: <% tp.user.getThisWorld(tp) %>
sessionNum: <% tp.user.getThisGameNum(tp) %>
location: 
date: <% tp.date.now("YYYY-MM-DD") %>
fc-calendar: <% tp.file.folder(false) %>
fc-date:
  year: <% tp.user.getThisDate(tp)[0] %>
  month: <% tp.user.getThisDate(tp)[1] %>
  day: <% tp.user.getThisDate(tp)[2] %>
fc-category: Sessions
summary: ""
tags: 
art: ""
---
# [[<% tp.file.title %>]]

## Session Summary

 > [!tldr] [[<% tp.file.title %>]]
>  ^summary

---

## Recap

![[<% tp.user.getLastGameTitle(tp) %>#^summary]]


---

## Log

