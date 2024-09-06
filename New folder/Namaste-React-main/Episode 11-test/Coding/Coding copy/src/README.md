# _Episode 13 - TEST CASE

##    expect(received).toBe(expected) // Object.is equality

    Expected: 32
    Received: 0

       7 | test("should be function should caculate then minus of number",()=>{
       8 |     const minus = Minus(4,4);
    >  9 |     expect(minus).toBe(32);
         |                   ^
      10 |
      11 | })

      at Object.toBe (Episode 11-test/Coding/Coding copy/src/component/__tests__/Sum.js:9:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.846 s, estimated 1 s
Ran all test suites.



console.log
      <ref *1> HTMLInputElement {
        '__reactFiber$27fy3ji1usp': <ref *2> FiberNode {
          tag: 5,
          key: null,
          elementType: 'input',
          type: 'input',
          stateNode: [Circular *1],
          return: FiberNode {
            tag: 5,
            key: null,
            elementType: 'form',
            type: 'form',
            stateNode: [HTMLFormElement],
            return: [FiberNode],
            child: [Circular *2],
            sibling: null,
            index: 1,
            ref: null,
            pendingProps: [Object],
            memoizedProps: [Object],
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 1,
            flags: 1048576,
            subtreeFlags: 1048576,
            deletions: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugSource: undefined,
            _debugOwner: [FiberNode],
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          child: null,
          sibling: FiberNode {
            tag: 5,
            key: null,
            elementType: 'input',
            type: 'input',
            stateNode: [HTMLInputElement],
            return: [FiberNode],
            child: null,
            sibling: [FiberNode],
            index: 1,
            ref: null,
            pendingProps: [Object],
            memoizedProps: [Object],
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 1,
            flags: 1048576,
            subtreeFlags: 0,
            deletions: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugSource: undefined,
            _debugOwner: [FiberNode],
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          index: 0,
          ref: null,
          pendingProps: {
            type: 'text',
            placeholder: 'name',
            className: 'border border-black p-2 m-2 '
          },
          memoizedProps: {
            type: 'text',
            placeholder: 'name',
            className: 'border border-black p-2 m-2 '
          },
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: 1,
          flags: 1048576,
          subtreeFlags: 0,
          deletions: null,
          lanes: 0,
          childLanes: 0,
          alternate: null,
          actualDuration: 0,
          actualStartTime: -1,
          selfBaseDuration: 0,
          treeBaseDuration: 0,
          _debugSource: undefined,
          _debugOwner: FiberNode {
            tag: 0,
            key: null,
            elementType: [Function: Contact],
            type: [Function: Contact],
            stateNode: null,
            return: [FiberNode],
            child: [FiberNode],
            sibling: null,
            index: 0,
            ref: null,
            pendingProps: {},
            memoizedProps: {},
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 1,
            flags: 1,
            subtreeFlags: 1048576,
            deletions: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugSource: undefined,
            _debugOwner: null,
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          _debugNeedsRemount: false,
          _debugHookTypes: null
        },
        '__reactProps$27fy3ji1usp': {
          type: 'text',
          placeholder: 'name',
          className: 'border border-black p-2 m-2 '
        },
        _wrapperState: { initialChecked: undefined, initialValue: '', controlled: false },
        '__reactEvents$27fy3ji1usp': Set(1) { 'invalid__bubble' },
        value: [Getter/Setter],
        _valueTracker: {
          getValue: [Function: getValue],
          setValue: [Function: setValue],
          stopTracking: [Function: stopTracking]
        }
      }

      at Object.log (Episode 11-test/Coding/Coding copy/src/component/__tests__/Contact.js:48:13)  

  ● should have multiple input fields

    expect(received).toBe(expected) // Object.is equality

    Expected: 2
    Received: 1

      47 |
      48 |     console.log(inputElements[0]);
    > 49 |     expect(inputElements.length).toBe(2);
         |                                  ^
      50 |   });

      at Object.toBe (Episode 11-test/Coding/Coding copy/src/component/__tests__/Contact.js:49:34) 

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        3.307 s
Ran all test suites.

html element 