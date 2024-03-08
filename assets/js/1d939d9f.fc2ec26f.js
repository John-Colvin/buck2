"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5024],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>d});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),d=function(e){return function(n){var t=u(n.components);return o.createElement(e,i({},n,{components:t}))}},u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,p=d["".concat(r,".").concat(f)]||d[f]||m[f]||i;return t?o.createElement(p,s(s({ref:n},c),{},{components:t})):o.createElement(p,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},16733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const i={id:"profile",title:"profile"},r=void 0,s={unversionedId:"users/commands/profile",id:"users/commands/profile",title:"profile",description:"These are the flags/commands under buck2 profile and their --help output:",source:"@site/../docs/users/commands/profile.generated.md",sourceDirName:"users/commands",slug:"/users/commands/profile",permalink:"/docs/users/commands/profile",draft:!1,tags:[],version:"current",frontMatter:{id:"profile",title:"profile"},sidebar:"manualSidebar",previous:{title:"lsp",permalink:"/docs/users/commands/lsp"},next:{title:"query",permalink:"/docs/users/commands/query"}},l={},c=[{value:"buck profile",id:"buck-profile",level:2},{value:"buck profile analysis",id:"buck-profile-analysis",level:3},{value:"buck profile bxl",id:"buck-profile-bxl",level:3},{value:"buck profile loading",id:"buck-profile-loading",level:3}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"These are the flags/commands under ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 profile")," and their ",(0,a.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,a.mdx)("h2",{id:"buck-profile"},"buck profile"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'buck2-release-profile \nProfiling mechanisms\n\nUSAGE:\n    buck2-release profile [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2\'s logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n    -h, --help\n            Print help information\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            "-v=1,stderr"\n            \n            [default: 1]\n\nSUBCOMMANDS:\n    analysis\n            Profile analysis\n    bxl\n            Profile BXL script\n    help\n            Print this message or the help of the given subcommand(s)\n    loading\n            Profile loading\n\n')),(0,a.mdx)("h3",{id:"buck-profile-analysis"},"buck profile analysis"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-profile-analysis \nProfile analysis\n\nUSAGE:\n    buck2-release profile analysis [OPTIONS] --output <PATH> --mode <MODE> [--] [TARGET_PATTERNS]...\n\nARGS:\n    <TARGET_PATTERNS>...\n            \n\nOPTIONS:\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --mode <MODE>\n            Profile mode.\n            \n            Memory profiling modes have suffixes either `-allocated` or `-retained`.\n            \n            `-retained` means memory kept in frozen starlark heap after analysis complete.\n            `-retained` does not work when profiling loading, because no memory is retained after\n            loading and frozen heap is not even created. This is probably what you want when\n            profiling analysis.\n            \n            `-allocated` means allocated memory, including memory which is later garbage collected.\n            \n            [possible values: time-flame, heap-flame-allocated, heap-flame-retained,\n            heap-summary-allocated, heap-summary-retained, statement, bytecode, bytecode-pairs,\n            typecheck]\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n    -o, --output <PATH>\n            Output file path for profile data.\n            \n            File will be created if it does not exist, and overwritten if it does.\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n    -r, --recursive\n            In analysis profiling, capture the profile of the target and its dependencies, and\n            output the merged profile\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")),(0,a.mdx)("h3",{id:"buck-profile-bxl"},"buck profile bxl"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-profile-bxl \nProfile BXL script\n\nUSAGE:\n    buck2-release profile bxl [OPTIONS] --output <PATH> --mode <MODE> <BXL label> [-- <BXL INPUT ARGS>...]\n\nARGS:\n    <BXL label>\n            The bxl function to execute as defined by the label of form\n            `<cell>//path/file.bxl:<function>`\n\n    <BXL INPUT ARGS>...\n            Arguments passed to the bxl script\n\nOPTIONS:\n        --build-report <PATH>\n            Print a build report\n            \n            --build-report=- will print the build report to stdout --build-report=<filepath> will\n            write the build report to the file\n\n        --build-report-options <BUILD_REPORT_OPTIONS>\n            Comma separated list of build report options.\n            \n            The following options are supported:\n            \n            `fill-out-failures`: fill out failures the same way Buck1 would.\n            \n            `package-project-relative-paths`: emit the project-relative path of packages for the\n            targets that were built.\n\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --eager-dep-files\n            Process dep files when they are generated (i.e. after running a command that produces\n            dep files), rather than when they are used (i.e. before re-running a command that\n            previously produced dep files). Use this when debugging commands that produce dep files.\n            Note that commands that previously produced dep files will not re-run: only dep files\n            produced during this command will be eagerly loaded\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fail-fast\n            If Buck hits an error, do as little work as possible before exiting.\n            \n            To illustrate the effect of this flag, consider an invocation of `build :foo :bar`. The\n            default behavior of buck is to do enough work to get a result for the builds of each of\n            `:foo` and `:bar`, and no more. This means that buck will continue to complete the build\n            of `:bar` after the build of `:foo` has failed; however, once one dependency of `:foo`\n            has failed, other dependencies will be cancelled unless they are needed by `:bar`.\n            \n            This flag changes the behavior of buck to not wait on `:bar` to complete once `:foo` has\n            failed. Generally, this flag only has an effect on builds that specify multiple targets.\n            \n            `--keep-going` changes the behavior of buck to not only wait on `:bar` once one\n            dependency of `:foo` has failed, but to additionally attempt to build other dependencies\n            of `:foo` if possible.\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -j, --num-threads <THREADS>\n            Number of threads to use during execution (default is # cores)\n\n        --keep-going\n            If Buck hits an error, continue doing as much work as possible before exiting.\n            \n            See `--fail-fast` for more details.\n\n        --local-only\n            Enable only local execution. Will reject actions that cannot execute locally\n            \n            [env: BUCK_OFFLINE_BUILD=]\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n    -M, --materializations <MATERIALIZATIONS>\n            Materialize (or skip) the final artifacts, bypassing buckconfig.\n            \n            [possible values: all, none]\n\n        --materialize-failed-inputs\n            Materializes inputs for failed actions which ran on RE\n\n        --mode <MODE>\n            Profile mode.\n            \n            Memory profiling modes have suffixes either `-allocated` or `-retained`.\n            \n            `-retained` means memory kept in frozen starlark heap after analysis complete.\n            `-retained` does not work when profiling loading, because no memory is retained after\n            loading and frozen heap is not even created. This is probably what you want when\n            profiling analysis.\n            \n            `-allocated` means allocated memory, including memory which is later garbage collected.\n            \n            [possible values: time-flame, heap-flame-allocated, heap-flame-retained,\n            heap-summary-allocated, heap-summary-retained, statement, bytecode, bytecode-pairs,\n            typecheck]\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n        --no-remote-cache\n            Do not perform remote cache queries or cache writes. If remote execution is enabled, the\n            RE service might still deduplicate actions, so for e.g. benchmarking, using a random\n            isolation dir is preferred\n            \n            [env: BUCK_OFFLINE_BUILD=]\n\n    -o, --output <PATH>\n            Output file path for profile data.\n            \n            File will be created if it does not exist, and overwritten if it does.\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --prefer-local\n            Enable hybrid execution. Will prefer executing actions that can execute locally on the\n            local host\n\n        --prefer-remote\n            Enable hybrid execution. Will prefer executing actions that can execute remotely on RE\n            and will avoid racing local and remote execution\n\n        --remote-only\n            Enable only remote execution. Will reject actions that cannot execute remotely\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-incompatible-targets\n            If target is incompatible with the specified configuration, skip building instead of\n            throwing error. This does not apply to targets specified with glob patterns `/...` or\n            `:` which are skipped unconditionally\n\n        --skip-missing-targets\n            If target is missing, then skip building instead of throwing error\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-no-execution\n            Experimental: Disable all execution\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n        --upload-all-actions\n            Uploads every action to the RE service, regardless of whether the action needs to\n            execute on RE.\n            \n            This is useful when debugging builds and trying to inspect actions which executed\n            remotely. It's possible that the action result is cached but the action itself has\n            expired. In this case, downloading the action itself would fail. Enabling this option\n            would unconditionally upload all actions, thus you will not hit any expiration issues.\n\n        --user-event-log <PATH>\n            Write user events to this log file. Both user and internal events are written to main\n            event log. If this flag is specified, user events are additionally written to user event\n            log. Log format is JSONL, uncompressed if no known extensions are detected, or you can\n            explicitly specify the compression via the file extension (ex: `.json-lines.gz` would be\n            gzip compressed, `.json-lines.zst` would be zstd compressed). Resulting log is is\n            compatible with `buck2 log show-user`\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n        --write-to-cache-anyway\n            Could be used to enable the action cache writes on the RE worker when no_remote_cache is\n            specified\n\n")),(0,a.mdx)("h3",{id:"buck-profile-loading"},"buck profile loading"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-profile-loading \nProfile loading\n\nUSAGE:\n    buck2-release profile loading [OPTIONS] --output <PATH> --mode <MODE> [--] [TARGET_PATTERNS]...\n\nARGS:\n    <TARGET_PATTERNS>...\n            \n\nOPTIONS:\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --mode <MODE>\n            Profile mode.\n            \n            Memory profiling modes have suffixes either `-allocated` or `-retained`.\n            \n            `-retained` means memory kept in frozen starlark heap after analysis complete.\n            `-retained` does not work when profiling loading, because no memory is retained after\n            loading and frozen heap is not even created. This is probably what you want when\n            profiling analysis.\n            \n            `-allocated` means allocated memory, including memory which is later garbage collected.\n            \n            [possible values: time-flame, heap-flame-allocated, heap-flame-retained,\n            heap-summary-allocated, heap-summary-retained, statement, bytecode, bytecode-pairs,\n            typecheck]\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n    -o, --output <PATH>\n            Output file path for profile data.\n            \n            File will be created if it does not exist, and overwritten if it does.\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n    -r, --recursive\n            In analysis profiling, capture the profile of the target and its dependencies, and\n            output the merged profile\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")))}u.isMDXComponent=!0}}]);