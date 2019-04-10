workflow "Build, Test, and Publish" {
  on = "push"
  resolves = [
    "Publish",
    "Test Demo",
    "Publish Demo",
  ]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "nuxt/actions-yarn@master"
  args = "test"
  needs = ["Install"]
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "build"
  needs = ["Test"]
}

# Filter for a new tag
action "Tag" {
  needs = [
    "Build",
    "Build Demo",
  ]
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "Publish" {
  needs = "Tag"
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}

action "Install Demo" {
  needs = "Build"
  uses = "nuxt/actions-yarn@master"
  args = "--cwd demo install"
}

action "Test Demo" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install Demo"]
  args = "--cwd demo test"
}

action "Build Demo" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Test Demo"]
  args = "--cwd demo build"
}

action "Publish Demo" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Tag"]
  args = "--cwd demo deploy-ident"
  secrets = ["GH_TOKEN"]
}
