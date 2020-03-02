# Hello world javascript action

this action is use to run iOS app unit test and output the result of test.

## Inputs

### `xcworkspace`

xcworkspace is use to get the target workspace to run test

## Outputs

### `none`

there nothing to output

## Example usage

usage: 

```yml
name: UnitTest

on: [push]
jobs:
  unitTest:
    runs-on: macOS-latest
    steps:
    - name: Checkout Repo
      uses: actions/checkout@master
    - name: Switch XCode Version
      run: sudo xcode-select -s /Applications/Xcode_11.app
    - name: Install Dependences
      run: |
        pod repo update
        pod install
      shell: bash
    - uses: zkhCreator/iOS-App-Test-Action@master
      with:
        workspace: TimeLog.xcworkspace
        use_modern_build_system: YES
        destination: -destination 'platform=iOS Simulator,name=iPhone 11,OS=13.0'
        lint: false
```
