# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Hotfix] 1.1.4
### Changed
- Remove namespace from mutations file
- Added class page to any generated page
### Fixed
- Fix import state in mutation file to be type (PascalCase) instead of value (camelCase)

## [Hotfix] 1.1.3
### Fixed
- Remove scoped styles from index.vue (use css specifity)

## [Hotfix] 1.1.2
### Fixed
- Fix test file pointing to wrong page file
- Remove unnecessary store file import extension to avoid TSLint warnings

## [Hotfix] 1.1.1
### Fixed
- Remove unnecessary store file import extension to avoid TSLint warnings

## [Release] 1.1.0
### Added
- Specify destination folder is now possible with `--dest <destination path>` option
- Added showroom to easily test tool functionality (test with `npm link`)

### Changed
- Updated docs
- Changed bin command to `vgcx` instead of `vgc` [Breaking]
- Test files are now generated inside `__tests__` folder [To be optionated later]
- Store,Action,Mutation,Getter files are now generated inside `store` folder

## [Release] 1.0.0
### Added
- Working MVP for basic vue project page generation

