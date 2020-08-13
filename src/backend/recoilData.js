let states = window[`$recoilDebugStates`];
let lastState = states[states.length - 1];
let atomNames = [];
for (let name of lastState.nodeToNodeSubscriptions.keys()) {
  atomNames.push(name);
}
let currentAtom = []
for (let entry of lastState.atomValues.values()){
  currentAtom.push(entry)
};

export { atomNames, lastState, currentAtom };
